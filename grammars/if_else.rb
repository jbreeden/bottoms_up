BottomsUp::Grammar.new(:S) do |p|
  p.rule :S, [[:I, :other]]
  p.rule :I, [:if, :S]
  p.rule :I, [:if, :S, :else, :S]
end
