require_relative '../bottoms_up'

$parser = BottomsUp::Grammar.new(:A) do |p|
  p.rule :A, [:'(', :A, :')']
  p.rule :A, [:a]
end
