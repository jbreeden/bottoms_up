require_relative '../parser'

$parser = BottomsUp.new(:QUERY) do |p|
  expr_operators = [:'=', :'!=', :'<>', :'>', :'<', :'!>', :'!<', :'>=', :'<=', :like, :'~']

  # Using (NON_TERMINAL | e) for option parts makes it easier to decord while reducing.
  # If the non terminals themselves were nullable, that would have to be detected on reduction.
  # With this grammar construction, we can safely assume they have contents on reuction
  p.rule :QUERY,       [:SELECT, :FROM, [:WHERE, :e], [:GROUP_BY, :e], [:ORDER_BY, :e], [:LIMIT, :e]]
  p.rule :QUERY,       [:SELECT, :FROM, [:WHERE, :e], :GROUP_BY, :HAVING, [:ORDER_BY, :e], [:LIMIT, :e]]
  p.rule :QUERY,       [:delete, :FROM, [:WHERE, :e]]
  p.rule :SELECT,      [:select, [:distinct, :e], :FIELD_LIST]
  p.rule :FIELD_LIST,  [:FIELD_LIST, :',', :FIELD]
  p.rule :FIELD_LIST,  [:FIELD]
  p.rule :FIELD,       [[:id, :'*']]
  p.rule :FIELD,       [:id, :as, :id]
  p.rule :FIELD,       [:AGGREGATE]
  p.rule :FIELD,       [:AGGREGATE, :as, :id]
  p.rule :FROM,        [:from, :id]
  p.rule :WHERE,       [:where, :EXPR]
  p.rule :LIMIT,       [:limit, :number]
  p.rule :LIMIT,       [:fetch, :first, :number, [:rows, :row], :only]
  p.rule :GROUP_BY,    [:group, :by, :ID_LIST]
  p.rule :ID_LIST,     [:id]
  p.rule :ID_LIST,     [:ID_LIST, :',', :id]
  p.rule :HAVING,      [:having, [:EXPR, :HAVING_EXPR]]
  p.rule :ORDER_BY,    [:order, :by, :id, [:asc, :desc, :e]]
  p.rule :HAVING_EXPR, [:AGGREGATE, expr_operators, :LITERAL]
  p.rule :HAVING_EXPR, [:LITERAL, expr_operators, :AGGREGATE]
  p.rule :EXPR,        [:EQ_EXPR,]
  p.rule :EQ_EXPR,     [:id, expr_operators, :LITERAL]
  p.rule :EQ_EXPR,     [:LITERAL, expr_operators, :id]
  p.rule :LITERAL,     [[:number, :string]]
  p.rule :AGGREGATE,   [:id, :'(', [:id, :'*'], :')'] # So far only single param aggregate functions supported

  # TODO: If groupby present, select fields must = groupby fields + aggregate functions
  # TODO: Multi eq expressions in where/having
end
