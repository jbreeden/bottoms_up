require_relative './parser/symcheck.rb'
require_relative './parser/nonterminal'
require_relative './parser/production'
require_relative './parser/item'
require_relative './parser/action'
require_relative './parser/nfa'
require_relative './parser/dfa'
require_relative './parser/ffsets'
require_relative './parser/printing'

class BottomsUp
  attr_reader :start_symbol,
    :productions,
    :non_terminals,
    :nfa,
    :dfa

  def initialize(start_symbol, &block)
    @augmented_start_symbol = "#{start_symbol}'".to_sym
    @productions = []
    @non_terminals = []

    rule(@augmented_start_symbol, [start_symbol])

    # Client calls `rule` to define the grammar
    block[self]

    @nfa = NFA.new(@augmented_start_symbol, items)
    @dfa = DFA.new(@augmented_start_symbol, @nfa)
  end

  def non_terminal(symbol)
    # O(n), could use a hash
    @non_terminals.find { |nt| nt.symbol == symbol }
  end

  def items
    result = []
    non_terminals.each do |nt|
      nt.productions.each do |p|
        p.items.each do |item|
          result.push item
        end
      end
    end
    result
  end

  def rule(non_terminal_symbol, produced_symbols)
    unless produced_symbols.length > 0
      raise "A production must contain at least one symbol"
    end
    nt = non_terminals.find { |nt| nt.symbol == non_terminal_symbol }
    non_terminals.push(nt = NonTerminal.new(non_terminal_symbol)) if nt.nil?
    expand_rule(produced_symbols).each do |expanded_rule|
      nt.produces(expanded_rule)
    end
  end

  def expand_rule(rule)
    rules = [[]]
    rule.each do |symbol|
      # Alternation:
      # Represented by a single level of nested arrays in the rule.
      # We flatten the alternatives by constructing the set of all expansions
      # given by a current expansion concatenated with a symbol from the alternation.
      #   (ie. L -> a(b|c) is expanded to L -> ab | ac)
      # Note that alternations containing :e retain the existing expansions, as
      # well as the set of existing expansions with the above rule applied.
      if symbol.respond_to?(:each)
        alternatives = []
        symbol.each do |sym|
          unless sym.class == Symbol
            raise "Alternations within production rules may only contain symbols"
          end
          rules.each do |existing_rule|
            if sym == :e
              alternatives.push(existing_rule)
            else
              alternatives.push(existing_rule + [sym])
            end
          end
        end
        rules = alternatives
      # Concatenation:
      # The default action for all symbols in the input (just like normal BNF).
      # Note that concatenating :e has no effect, and can be ignored.
      else
        next if symbol == :e # No point in concatentating the empty string
        rules.each do |existing_rule|
          unless symbol.class == Symbol
            raise "Production rules may only contain symbols or alternations (enumerables of symbols)"
          end
          existing_rule.push(symbol)
        end
      end
    end
    # Could start from [:e] instead of [], but then we have to remove
    # the :e on the first concatenation. Instead, we can just replace any
    # empty rules with [:e] at the end. This is mostly for printing,
    # as [:e] and [] are semantically equivalent as items.
    rules = rules.map { |r| r == [] ? [:e] : r }
  end

  def firsts(sym)
    return sym if SymCheck.terminal?(sym)

    unless @firsts
      @firsts = {}
      non_terminals.each do |nt|
        @firsts[nt.symbol] = FirstSet.new(@firsts, nt)
      end

      begin
        @firsts.values.each { |set|
          set.resolve
        }
      end while @firsts.values.find { |set| set.changed? }
    end

    @firsts[sym].terminals
  end

  def follows(sym)
    unless @follows
      @follows = {}
      non_terminals.each do |nt|
        @follows[nt.symbol] = FollowSet.new(@firsts, @follows, @non_terminals, nt)
        if nt.symbol == @augmented_start_symbol
          @follows[nt.symbol].add_terminal(:'$')
        end
      end

      begin
        @follows.values.each { |set|
          set.resolve
        }
      end while @follows.values.find { |set| set.changed? }
    end

    @follows[sym].terminals
  end
end
