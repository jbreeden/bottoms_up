require_relative '../bottoms_up'

$parser = BottomsUp::Grammar.new(:ARITHMETIC) do |p|
  p.rule(:ARITHMETIC, [:EXPR_LIST])
  p.rule(:EXPR_LIST, [:EXPR])
  p.rule(:EXPR_LIST, [:EXPR_LIST, :EXPR])
  p.rule(:EXPR, [[:MULTIPLICATION, :DIVISION, :ADDITION, :SUBTRACTION, :NUMBER]])
  p.rule(:EXPR, [:'(', :EXPR, :')'])
  p.rule(:MULTIPLICATION, [:EXPR, :'*', :EXPR])
  p.rule(:DIVISION, [:EXPR, :'/', :EXPR])
  p.rule(:ADDITION, [:EXPR, :'+', :EXPR])
  p.rule(:SUBTRACTION, [:EXPR, :'-', :EXPR])
  p.rule(:NUMBER, [[:'+', :'-'], :number])
  p.rule(:NUMBER, [:number])
end
