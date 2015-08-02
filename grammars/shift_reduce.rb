require_relative '../bottoms_up'

$parser = BottomsUp::Grammar.new(:E) do |p|
  p.rule :E, [:'1', :E]
  p.rule :E, [:'1']
end
