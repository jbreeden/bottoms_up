BottomsUp::Grammar.new(:S) do |p|
  p.rule :S, [:'(', :S, :')', :S]
  p.rule :S, [:e]
end
