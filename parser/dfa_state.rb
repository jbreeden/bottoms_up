class BottomsUp
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
            # Next state will be one that closes over all states
            # from the NFA that represent the next item of any item
            # from the current closure, after recieving the given token.
            next_state_closure = closure.select { |s|
              s.item.next_symbol == symbol
            }.map { |s| s.next_state }

            # Make sure to include the epsilon closure of all next states from the NFA
            next_state_closure.concat(next_state_closure.flat_map {|s| s.epsilon_closure})
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
  end
end
