module BottomsUp
  class DFA
    class State
      attr_reader :num, :nfa_states
      alias closure nfa_states

      def initialize(dfa, nfa_states)
        @dfa = dfa
        @num = @dfa.next_state_number
        @nfa_states = nfa_states.dup
      end

      def items
        nfa_states.map { |s| s.item }
      end

      def shifts
        unless @shifts
          @shifts = {}
          next_symbols.each do |symbol|
            # Next state will be one that includes all nfa states
            # that represent the next nfa state of any nfa state
            # from the current dfa state that is expecting the current symbol.
            next_state_closure = closure.select { |nfa_state|
              nfa_state.item.next_symbol == symbol
            }.map { |nfa_state| nfa_state.next_state }

            # Next state will also include the epsilon closure of all items
            # determined to be in that state
            next_state_closure.concat(next_state_closure.flat_map {|nfa_state| nfa_state.epsilon_closure})
            next_state_closure = next_state_closure.uniq

            # Get the DFA state for the determined closure,
            # or create it if it doesn't yet exist
            existing_state = @dfa.state_for_closure(next_state_closure)
            if existing_state
              next_state = existing_state
            else
              next_state = State.new(@dfa, next_state_closure)
              @dfa.states.push(next_state)
            end

            # Now that we have the next state, check if it's a goto or a shift
            @shifts[symbol] = if SymCheck.non_terminal?(symbol)
              Goto.new(symbol, next_state)
            else
              Shift.new(symbol, next_state)
            end
          end
        end
        @shifts
      end

      def reductions
        @reductions ||= closure.select { |nfa_state|
          nfa_state.item.reduction_item?
        }.map { |nfa_state|
          Reduction.new(nfa_state.item.production)
        }
      end

      def next_symbols
        @next_symbols ||= closure.select { |nfa_state|
          nfa_state.item.shift_item? || nfa_state.item.goto_item?
        }.map { |nfa_state|
          nfa_state.item.next_symbol
        }.uniq
      end
    end
  end
end
