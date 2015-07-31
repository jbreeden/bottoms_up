require_relative '../bottoms_up'

$parser = BottomsUp.new(:E) do |p|
  # Should be rewritten without :e as
  # E -> A B | e
  p.rule :E, [:A, :e, :B]
  p.rule :E, [:e]
  # Should be expanded to remove :e as
  # A -> str B | str
  p.rule :A, [:str, [:B, :e]]
  p.rule :B, [:e]
end
