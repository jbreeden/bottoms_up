require_relative '../parser'

parser = BottomsUp.new(:E) do |p|
  p.rule :E, [:'1', :E]
  p.rule :E, [:'1']
end

parser.dump_html
