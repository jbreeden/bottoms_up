module BottomsUp
  class Grammar
    def to_html
      result = "<html><head><style>\n"
      result <<
        "h1 { margin: 10px 0 5px 0; font-size: 16pt; }\n" +
        "pre { margin: 0; background-color: whitesmoke; display: inline-block; padding: 10px; border-style: solid; border-width: 1px; border-radius: 4px; }\n" +
        "table { border-collapse: collapse; border-spacing: 0px; }" +
        "th, td { border-width: 1px; border-style: solid; border-color: black; margin: 0; padding: 4px; }\n" +
        "thead { background-color: skyblue; }\n" +
        "tr.odd-state { background-color: whitesmoke; }\n"
      result << "</style></head><body>\n"

      result << "<h1>Grammar</h1>\n"
      result << get_grammar_html
      result << get_first_sets_html
      result << get_follow_sets_html
      result << '<h1>NFA Table</h1>'
      result << @nfa.to_html
      result << '<h1>DFA Table</h1>'
      result << @dfa.to_html

      result << "</body></html>"
      result
    end

    def get_grammar_html
      result = "<pre>\n"
      @non_terminals.each_with_index do |non_terminal, non_terminal_i|
        result << "#{non_terminal.symbol} ->\n"
        non_terminal.productions.each_with_index do |production, production_idx|
          result << "  #{production_idx == 0 ? '' : '| '}#{production.symbols.join(' ')}\n"
        end
        result << "\n" unless non_terminal_i == (@non_terminals.length - 1)
      end
      result << "</pre>\n"
      result
    end

    def get_first_sets_html
      result = "<h1>First Sets</h1>\n"
      result <<
        "<table>\n" <<
        "  <thead>\n" <<
        "    <th>Non Terminal</th>\n" <<
        "    <th>Firsts</th>\n" <<
        "  </thead>\n" <<
        "  <tbody>\n"

      @non_terminals.each do |nt|
        result <<
          "<tr>" <<
          "<td>#{nt.symbol}</td><td>#{firsts(nt.symbol).join(' ')}</td>" <<
          "</tr>\n"
      end

      result <<
        "  </tbody>\n" <<
        "</table>\n"

      result
    end

    def get_follow_sets_html
      result = '<h1>Follow Sets</h1>'
      result <<
        "<table>\n" <<
        "  <thead>\n" <<
        "    <th>Non Terminal</th>\n" <<
        "    <th>Follows</th>\n" <<
        "  </thead>\n" <<
        "  <tbody>\n"

      @non_terminals.each do |nt|
        result <<
          "<tr>" <<
          "<td>#{nt.symbol}</td><td>#{follows(nt.symbol).join(' ')}</td>" <<
          "</tr>\n"
      end

      result <<
        "  </tbody>\n" <<
        "</table>\n"

      result
    end
  end
end
