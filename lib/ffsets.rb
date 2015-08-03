module BottomsUp
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
end
