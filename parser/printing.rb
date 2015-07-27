class BottomsUp
  def dump_html
    puts "<html><head><style>\n"
    puts style =
      "h1 { margin: 10px 0 5px 0; font-size: 16pt; }\n" +
      "pre { margin: 0; background-color: whitesmoke; display: inline-block; padding: 10px; border-style: solid; border-width: 1px; border-radius: 4px; }\n" +
      "table { border-collapse: collapse; border-spacing: 0px; }" +
      "th, td { border-width: 1px; border-style: solid; border-color: black; margin: 0; padding: 4px; }\n" +
      "thead { background-color: skyblue; }\n" +
      "tr.odd-state { background-color: whitesmoke; }\n"
    puts "</style></head><body>\n"

    puts('<h1>Grammar</h1>')
    print_html_grammar
    puts
    print_first_sets
    print_follow_sets
    puts('<h1>NFA Table</h1>')
    puts @nfa.to_html
    puts('<h1>DFA Table</h1>')
    puts @dfa.to_html

    puts "</body></html>"
  end

  def print_html_grammar
    result = "<pre>"
    @non_terminals.each_with_index do |non_terminal, non_terminal_i|
      result << "#{non_terminal.symbol} ->\n"
      non_terminal.productions.each_with_index do |production, production_idx|
        result << "  #{production_idx == 0 ? '' : '| '}#{production.symbols.join(' ')}\n"
      end
      result << "\n" unless non_terminal_i == (@non_terminals.length - 1)
    end
    result << "</pre>"
    puts result
  end

  def print_first_sets
    str = '<h1>First Sets</h1>'
    str <<
      "<table>\n" <<
      "  <thead>\n" <<
      "    <th>Non Terminal</th>\n" <<
      "    <th>Firsts</th>\n" <<
      "  </thead>\n" <<
      "  <tbody>\n"

    @non_terminals.each do |nt|
      str <<
        "<tr>" <<
        "<td>#{nt.symbol}</td><td>#{firsts(nt.symbol).join(' ')}</td>" <<
        "</tr>\n"
    end

    str <<
      "  </tbody>\n" <<
      "</table>\n"

    puts str
  end

  def print_follow_sets
    str = '<h1>Follow Sets</h1>'
    str <<
      "<table>\n" <<
      "  <thead>\n" <<
      "    <th>Non Terminal</th>\n" <<
      "    <th>Follows</th>\n" <<
      "  </thead>\n" <<
      "  <tbody>\n"

    @non_terminals.each do |nt|
      str <<
        "<tr>" <<
        "<td>#{nt.symbol}</td><td>#{follows(nt.symbol).join(' ')}</td>" <<
        "</tr>\n"
    end

    str <<
      "  </tbody>\n" <<
      "</table>\n"

    puts str
  end
end
