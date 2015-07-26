class LR0
  def dump_html
    puts('<h1>Grammar</h1>')
    print_html_grammar
    puts
    puts('<h1>NFA Table</h1>')
    puts @nfa.to_html
    puts('<h1>DFA Table</h1>')
    puts @dfa.to_html
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
end
