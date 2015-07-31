class BottomsUp
  class NFA
    class State
      attr_reader :nfa, :item, :num

      def initialize(nfa, item, num)
        @nfa = nfa
        @item = item
        @num = num
      end

      def epsilon_closure
        @closure ||= @nfa.epsilon_closure(self.num).map { |s_num| @nfa.states[s_num] }
      end

      def epsilon_transitions
        @espilon_transitions ||= @nfa.epsilon_transitions(self.num).map { |num| @nfa.states[num] }
      end

      def next_state
        @next_state ||= @nfa.states.find { |s| s.item == item.next_item }
      end

      def action
        @action ||= if item.reduction_item?
          Reduction.new(item.production)
        elsif item.goto_item?
          Goto.new(item.next_symbol, next_state)
        elsif item.shift_item?
          Shift.new(item.next_symbol, next_state)
        else
          raise "Error in parser. No action known for item #{item}"
        end
      end
    end
  end
end
