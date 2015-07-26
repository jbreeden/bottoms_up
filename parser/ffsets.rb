class BottomsUp
  class FFSet
    attr_reader :changed

    def initialize(non_terminal)
      @non_terminal = non_terminal
      @terminals = []
      @changed = false
    end

    def terminals
      @terminals.dup
    end

    def changed?
      @changed
    end

    def add_terminal(terminal_symbol)
      if @terminals.find { |t| t == terminal_symbol }
        false
      else
        @terminals.push(terminal_symbol)
        true
      end
    end

    def resolve
      raise "This method is abstract on the FFSet base class"
    end
  end

  class FollowSet < FFSet
    def initialize(all_firsts, all_follows, all_non_terminals, non_terminal)
      super(non_terminal)
      @all_firsts = all_firsts
      @all_follows = all_follows
      @all_non_terminals = all_non_terminals
      @non_terminal = non_terminal

      all_non_terminals.reject { |nt| nt == non_terminal }
    end

    def resolve
      @changed = false
      prev_terminal_length = @terminals.length

      @changed = prev_terminal_length != @terminals.length
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
