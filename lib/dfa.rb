require_relative './dfa_state'

module BottomsUp
  class DFA
    attr_reader :start_symbol,
      :states,
      :shifts,
      :nfa,
      :table,
      :conflicts

    def initialize(start_symbol, nfa, follows)
      @start_symbol = start_symbol
      @states = []
      @nfa = nfa
      @next_state_number = -1
      @conflicts = []
      define_states

      states.each do |state|
        state.reductions.each do |reduction|
          reduction.lookaheads = follows[reduction.production.non_terminal.symbol].terminals
        end
      end

      @table = self.to_a
    end

    def next_state_number
      @next_state_number += 1
    end

    def define_states
      @states = []
      start_state_closure = @nfa.start_symbol_state.epsilon_closure
      items = start_state_closure.map { |state| state.item }
      start_state = State.new(self, start_state_closure)
      @states.push(start_state)

      # State#shifts will generate a new state and push it on @states
      # if the state for the required closure does not yet exist. So,
      # we can run "shifts" on all new states until no new states
      # are created. Then all states will have been created.
      visited_states = []
      new_states = [start_state]
      begin
        new_states.each { |s| s.shifts }
        visited_states.concat(new_states)
        new_states = @states.dup - visited_states
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
        "    <tr><th rowspan=\"2\">State</th><th rowspan=\"2\">NFA States</th><th rowspan=\"2\">Items</th><th rowspan=\"2\">Shifts</th><th colspan=\"2\">Reductions</th><th rowspan=\"2\">Conflicts</th></tr>\n" <<
        "    <tr><th>Rule</th><th>SLR Lookaheads</th></tr>\n" <<
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
          row << "</tr>\n"

          result << row
          row = "<tr class=\"#{row_class}\">"
        end
      end
      result << "</tbody>\n"
      result << "</table>\n"
      result
    end

    def to_a
      result = []
      states.each_with_index do |s, i|
        state = {}
        state[:shifts] = {}
        s.shifts.each do |symbol, action|
          state[:shifts][symbol] = action.state.num
        end
        state[:reductions] = []
        s.reductions.each do |action|
          reduction = {}
          reduction[:produces] = action.production.non_terminal.symbol
          reduction[:lookaheads] = action.lookaheads
          reduction[:reduces] = action.production.symbol_count
          state[:reductions].push(reduction)
          action.lookaheads.each do |la|
            if s.shifts[la]
              @conflicts.push Conflict.new("Shift-Reduce", s, la, [action, s.shifts[la]])
            end
          end
          s.reductions.reject { |a| a == action }.each do |other|
            action.lookaheads.each do |la|
              if other.lookaheads.index(la)
                @conflicts.push Conflict.new("Reduce-Reduce", s, la, [action, other])
              end
            end
          end
        end
        result.push(state)
      end
      result
    end
  end
end
