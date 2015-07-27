require_relative './dfa_state'

class BottomsUp
  class DFA
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
      # are created. Then all states will have been created.
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
      result =
        "<table>\n" <<
        "  <thead>\n" <<
        "    <tr><th rowspan=\"2\">State</th><th rowspan=\"2\">NFA States</th><th rowspan=\"2\">Items</th><th rowspan=\"2\">Shifts</th><th colspan=\"2\">Reductions</th></tr>\n" <<
        "    <tr><th>Rule</th><th>LR0 Lookaheads</th></tr>\n" <<
        "  </thead>\n" <<
        "<tbody>\n"

      states.each_with_index do |s, i|
        row_class = i % 2 == 0 ? 'even-state' : 'odd-state'
        row =
          "<tr class=\"#{row_class}\"><td rowspan=\"#{s.closure.length}\">#{i}</td>"


        s.closure.each_with_index do |nfa_state, i|
          row <<
            "<td>#{nfa_state.num}</td>" <<
            "<td>#{nfa_state.item}</td>"

          if s.shifts.length > i
            row << "<td>#{s.shifts.keys[i]} -> #{s.shifts[s.shifts.keys[i]]}</td>"
          else
            row << "<td></td>"
          end

          if s.reductions.length > i
            row << "<td>#{s.reductions[i].production}</td><td>#{s.reductions[i].lookahead.join(' ') if s.reductions[i]}</td>"
          else
            row << "<td></td><td></td>"
          end
          row << "</tr>"

          result << row
          row = "<tr class=\"#{row_class}\">"
        end

        # closure_cell << "</td>"
        # items_cell   << "</td>"
        # shifts_cell = "<td>"
        # s.shifts.each do |sym, action|
        #   shifts_cell << "#{sym} -> #{action}<br/>"
        # end
        # shifts_cell << "</td>"
        # reductions_cell = "<td>"
        # s.reductions.each do |action|
        #   reductions_cell << "#{action}<br/>"
        # end
        # reductions_cell << "</td>"
        # result << closure_cell << items_cell << shifts_cell << reductions_cell
        # result << '</tr>'
      end
      result << "</tbody>"
      result << "</table>"
      result
    end
  end
end
