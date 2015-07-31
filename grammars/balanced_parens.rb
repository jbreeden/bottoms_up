require_relative '../bottoms_up'

$parser = BottomsUp.new(:S) do |p|
  p.rule :S, [:'(', :S, :')', :S]
  p.rule :S, [:e]
end
