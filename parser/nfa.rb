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
          Goto.new(next_state)
        elsif item.shift_item?
          Shift.new(next_state)
        else
          raise "Error in parser. No action known for item #{item}"
        end
      end
    end

    attr_reader :states

    def initialize(start_symbol, items)
      # In the NFA table, items are 1-to-1 with states,
      # so just use the items - as they are - for the states.
      # States are identified by their number, which will just
      # be their index in this array.
      @start_symbol = start_symbol
      @items = items.dup
      define_states
    end

    def define_states
      @states = []
      @items.each_with_index { |item, i|
        @states.push State.new(self, item, i)
      }
    end

    def start_symbol_state
      @states.find { |s| s.item.production.non_terminal.symbol == @start_symbol }
    end

    def epsilon_closure(state_num, seen = [])
      closure = []
      unless seen.index(state_num)
        closure = [state_num]
        seen.push(state_num)
        epsilon_transitions(state_num).each do |epsilon_state_num|
          closure.concat(epsilon_closure(epsilon_state_num, seen))
        end
      end
      closure
    end

    def epsilon_transitions(state_num)
      @epsilon_transitions ||= []
      item = @items[state_num]
      @epsilon_transitions[state_num] ||= if item.goto_item?
        epsilons = []
        @items.each_with_index { |other_item, i|
          if other_item.start_item? && other_item.production.non_terminal.symbol == item.next_symbol
            epsilons.push(i)
          end
        }
        epsilons
      else
        []
      end
      @epsilon_transitions[state_num]
    end

    def to_s
      result = ""
      header = "State | Action"
      result << header << "\n"
      result << ('-' * header.length) << "\n"
      states.each do |s|
        result << ("%5d" % s.num) << " | e[" << s.epsilon_transitions.map { |s| s.num }.join(',') << "] " << action(s.num).to_s << "\n"
      end
      result
    end

    def to_html
      result = "<table border='1' cellspacing='0' cellpadding='3'>"
      result << "<thead><th>State</th><th>Item</th><th>Epsilon Transitions</th><th>Action</th></thead>"
      result << "<tbody>"
      states.each do |s|
        result << "<tr>"
        result << "<td>#{s.num}</td>"
        result << "<td>#{s.item.to_s}</td>"
        result << "<td>#{s.epsilon_transitions.map { |s| s.num } }</td>"
        result << "<td>#{s.action.to_s}</td>"
        result << "</tr>"
      end
      result << "</tbody></table>"
      result
    end
  end
end
