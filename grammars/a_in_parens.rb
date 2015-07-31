require_relative '../bottoms_up'

$parser = BottomsUp.new(:A) do |p|
  p.rule :A, [:'(', :A, :')']
  p.rule :A, [:a]
end
