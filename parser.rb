require_relative './parser/symcheck.rb'
require_relative './parser/nonterminal'
require_relative './parser/production'
require_relative './parser/item'
require_relative './parser/action'
require_relative './parser/nfa'
require_relative './parser/dfa'
require_relative './parser/printing'

class LR0
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
  attr_reader :start_symbol,
    :productions,
    :non_terminals

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
      if symbol.respond_to?(:each)
        alternatives = []
        symbol.each do |sym|
          raise "Alternations within production rules may only contain symbols" unless sym.class == Symbol
          rules.each do |existing_rule|
            alternatives.push(existing_rule + [sym])
          end
        end
        rules = alternatives
      else
        rules.each do |existing_rule|
          raise "Production rules may only contain symbols or alternations (enumerables of symbols)" unless symbol.class == Symbol
          existing_rule.push(symbol)
        end
      end
    end
    rules
  end
end
