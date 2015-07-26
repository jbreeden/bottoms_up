require_relative '../parser'

parser = BottomsUp.new(:S) do |p|
  p.rule :S, [:'(', :S, :')', :S]
  p.rule :S, [:e]
end

parser.dump_html