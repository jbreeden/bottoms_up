class LR0
  class DFA
    class State
      attr_reader :num, :nfa_state_closure
      alias closure nfa_state_closure

      def initialize(dfa, nfa_state_closure)
        @dfa = dfa
        @num = @dfa.next_state_number
        @nfa_state_closure = nfa_state_closure.dup
      end

      def items
        nfa_state_closure.map { |s| s.item }
      end

      def shifts
        unless @shifts
          @shifts = {}
          next_symbols.each do |symbol|
            next_state_closure = @shifts[symbol] = closure.select { |s|
              s.item.next_symbol == symbol
            }.map { |s| s.next_state }

            next_state_closure.concat(next_state_closure.flat_map {|s| s.epsilon_closure})
            next_state_closure = next_state_closure.uniq

            existing_state = @dfa.state_for_closure(next_state_closure)
            if existing_state
              next_state = existing_state
            else
              next_state = State.new(@dfa, next_state_closure)
              @dfa.states.push(next_state)
            end

            @shifts[symbol] = if SymCheck.non_terminal?(symbol)
              Goto.new(next_state)
            else
              Shift.new(next_state)
            end
          end
        end
        @shifts
      end

      def reductions
        @reductions ||= closure.select { |s|
          s.item.reduction_item?
        }.map { |s|
          Reduction.new(s.item.production)
        }
      end

      def next_symbols
        @next_symbols ||= closure.select { |s|
          s.item.shift_item? || s.item.goto_item?
        }.map { |s|
          s.item.next_symbol
        }.uniq
      end
    end

    attr_reader :start_symbol,
      :states,
      :shifts,
      :nfa

    def initialize(start_symbol, nfa)
      @start_symbol = start_symbol
      # @epsilon_closures = []
      @states = []
      # @shifts = []
      @nfa = nfa
      @next_state_number = -1
      define_states
    end

    def next_state_number
      @next_state_number += 1
    end

    def define_states
      @states = []
      nfa_states = [@nfa.start_symbol_state]

      @nfa.start_symbol_state
      closure = @nfa.start_symbol_state.epsilon_closure
      items = closure.map { |state| state.item }
      start_state = State.new(self, closure)
      @states.push(start_state)

      # State#shifts will generate a new state and push it on DFA#states
      # if the state for the required closure does not yet exist. So,
      # we can run "shifts" on all new states until no new states
      # are created
      known_states = []
      new_states = [start_state]
      begin
        new_states.each { |s| s.shifts }
        known_states.concat(new_states)
        new_states = @states.dup - known_states
      end until new_states.empty?
    end

    def state_for_closure(closure)
      @state_for_closure ||= {}
      @state_for_closure[closure] ||= states.find { |s| s.closure == closure }
    end

    def to_html
      result = "<table border='1' cellspacing='0' cellpadding='3'>"
      result << "<thead><th>State</th><th>NFA States</th><th>Items</th><th>Shifts</th><th>Reductions</th></thead>"
      result << "<tbody>"
      states.each_with_index do |s, i|
        result << '<tr>'
        result << "<td>#{i}</td>"
        closure_cell = "<td>"
        items_cell = "<td>"
        s.closure.each_with_index do |nfa_state, i|
          closure_cell << "#{nfa_state.num}<br/>"
          items_cell   << "#{nfa_state.item}<br/>"
        end
        closure_cell << "</td>"
        items_cell   << "</td>"
        shifts_cell = "<td>"
        s.shifts.each do |sym, action|
          shifts_cell << "#{sym} -> #{action}<br/>"
        end
        shifts_cell << "</td>"
        reductions_cell = "<td>"
        s.reductions.each do |action|
          reductions_cell << "#{action}<br/>"
        end
        reductions_cell << "</td>"
        result << closure_cell << items_cell << shifts_cell << reductions_cell
        result << '</tr>'
      end
      result << "</tbody>"
      result << "</table>"
      result
    end
  end
end
