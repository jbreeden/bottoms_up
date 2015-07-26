require_relative '../parser'

parser = BottomsUp.new(:A) do |p|
  p.rule :A, [:'(', :A, :')']
  p.rule :A, [:a]
end

parser.dump_html
