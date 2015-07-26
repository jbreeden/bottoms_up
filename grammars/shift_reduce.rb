require_relative '../parser'

parser = LR0.new(:E) do |p|
  p.rule :E, [:'1', :E]
  p.rule :E, [:'1']
end

parser.dump_html
