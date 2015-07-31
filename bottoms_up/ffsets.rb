class BottomsUp
  class FFSet
    attr_accessor :changed

    def initialize(non_terminal)
      @non_terminal = non_terminal
      @terminals = []
      @changed = false
    end

    def terminals
      @terminals.dup
    end

    def add_terminal(terminal_symbols)
      terminal_symbols = Array(terminal_symbols)
      term_count = @terminals.length
      @terminals = (terminal_symbols.dup - @terminals) + @terminals
      @changed ||= (@terminals.length != term_count)
    end
    alias add_terminals add_terminal

  end

  class FollowSet < FFSet
    def initialize(non_terminal)
      super(non_terminal)
    end
  end

  class FirstSet < FFSet

    def initialize(all_first, non_terminal)
      super(non_terminal)
      @firsts = all_first
    end

    def resolve
      @changed = false
      prev_terminal_length = @terminals.length
      @non_terminal.productions.each do |p|
        p.symbols.each do |s|
          if s == :e
            next # epsilon is not a valid first
          elsif SymCheck.terminal?(s)
            add_terminal(s)
            # Any terminal besides :e means this is the last possible first for this production
            break
          else
            next_nt_firsts = @firsts[s].terminals
            @terminals.concat((next_nt_firsts.dup - (@terminals + [:e])))

            # If the next non terminal in the production can't start with :e,
            # then our first terminal must be within this non terminal, so break.
            break if next_nt_firsts.find { |s| s == :e }.nil?
          end
        end
      end
      # Did our first set change?
      @changed = prev_terminal_length != @terminals.length
    end
  end

  def define_firsts
    @firsts = {}
    non_terminals.each do |nt|
      @firsts[nt.symbol] = FirstSet.new(@firsts, nt)
    end

    begin
      @firsts.values.each { |set|
        set.resolve
      }
    end while @firsts.values.find { |set| set.changed }
  end

  # Yikes... wash me
  def define_follows
    @follows = {}
    non_terminals.each do |nt|
      @follows[nt.symbol] = FollowSet.new(nt)
      if nt.symbol == @augmented_start_symbol
        @follows[nt.symbol].add_terminal(:'$')
      end
    end

    begin
      @follows.values.each { |f| f.changed = false }
      non_terminals.each do |nt|
        nt.productions.each do |p|
          following = nil
          p.symbols.each_with_index do |sym, i|
            if SymCheck.non_terminal?(sym)
              following = sym
              if i == p.symbols.length
                # For items like `A -> abcB.`, follows(B) contains follows(A)
                @follows[following].add_terminals(@follows[p.non_terminal.symbol].terminals)
              else
                found_non_epsilon_follow = false
                # Not at the end, iterate over the remaining symbols
                p.symbols[(i + 1)..(p.symbols.length)].each do |next_sym|
                  if next_sym == :e
                    next # :e is nothing, consider next symbol as the follows
                  elsif SymCheck.terminal?(next_sym)
                    @follows[following].add_terminal(next_sym)
                    # Found a terminal, so no more symbols from this production are in the follows
                    # set for `following`
                    found_non_epsilon_follow = true
                    break
                  else
                    # We've got a non-terminal following our non-terminal
                    if @firsts[next_sym].terminals.empty?
                      next
                    else
                      @follows[following].add_terminals(@firsts[next_sym].terminals)
                      found_non_epsilon_follow = true
                    end
                  end
                end
                unless found_non_epsilon_follow
                  # This production had the form `A -> B(C|e)` where `C -> e`.
                  # Basically, there was no follow for B found, so add follows(A) to follows(B)
                  @follows[following].add_terminals(@follows[p.non_terminal.symbol].terminals)
                end
              end
            end
          end
        end
      end
    end while @follows.values.find { |set| set.changed }
  end

  def firsts(sym)
    return sym if SymCheck.terminal?(sym)
    @firsts[sym].terminals
  end

  def follows(sym)
    @follows[sym].terminals
  end
end
