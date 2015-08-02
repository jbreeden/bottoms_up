BottomsUp::Grammar.new(:QUERY) do |p|
  # Using (NON_TERMINAL | e) for option parts makes it easier to decord while reducing.
  # If the non terminals themselves were nullable, that would have to be detected on reduction.
  # With this grammar construction, we can safely assume they have contents on reuction
  p.rule :QUERY,       [:SELECT, :FROM, [:WHERE, :e], [:GROUP_BY, :e], [:ORDER_BY, :e], [:LIMIT, :e]]
  p.rule :QUERY,       [:SELECT, :FROM, [:WHERE, :e], :GROUP_BY, :HAVING, [:ORDER_BY, :e], [:LIMIT, :e]]
  p.rule :QUERY,       [:delete, :FROM, [:WHERE, :e]]
  p.rule :SELECT,      [:select, [:distinct, :e], :FIELD_LIST]
  p.rule :FIELD_LIST,  [:FIELD_LIST, :',', :FIELD]
  p.rule :FIELD_LIST,  [:FIELD]
  p.rule :FIELD,       [:'*']
  p.rule :FIELD,       [:EXPR]
  p.rule :FIELD,       [:EXPR, :as, :id]
  p.rule :FROM,        [:from, :id]
  p.rule :WHERE,       [:where, :EXPR]
  p.rule :LIMIT,       [:limit, :number]
  p.rule :LIMIT,       [:fetch, :first, :number, [:rows, :row], :only]
  p.rule :GROUP_BY,    [:group, :by, :ID_LIST]
  p.rule :ID_LIST,     [:id]
  p.rule :ID_LIST,     [:ID_LIST, :',', :id]
  p.rule :HAVING,      [:having, :EXPR]
  p.rule :ORDER_BY,    [:order, :by, :id, [:asc, :desc, :e]]

  # Recall (Association & Precedence)
  # - Left recursion yield left-associative operators
  #   + Think about the productions, you always have to expand the left side,
  #     so in the reductions, you must work up from the bottom left.
  #         OR_EXPR
  #        /      \
  #     OR_EXPR   id
  #      /    \
  #  OR_EXPR  id
  #    /
  #   ...
  #
  #
  # - Since AND_EXPR does not have OR_EXPR in its term,
  #   OR_EXPR will have lower precedence.
  #   Basically, there is no AND_EXPR -> {ANYTHING} and OR_EXPR
  #   So you can't get:
  #
  #        AND_EXPR
  #        /       \
  #       /        OR_EXPR
  #      /        /       \
  #   a = b and b = c or a = d

  eq_operators = [:'=', :'!=', :'<>', :'>', :'<', :'!>', :'!<', :'>=', :'<=', :like, :'~']

  precedence = []
  precedence.push([:LITERAL, :id, :PAREN_EXPR, :AGGREGATE])
  is_term = precedence.flatten
  precedence.push([:EQ_EXPR])
  eq_term = precedence.flatten
  precedence.push([:NOT_EXPR])
  not_term = precedence.flatten
  precedence.push([:AND_EXPR])
  and_term = precedence.flatten
  precedence.push([:OR_EXPR])
  or_term = precedence.flatten

  any_expression = precedence.flatten

  p.rule :EXPR,        [any_expression]
  p.rule :OR_EXPR,     [or_term, :or, and_term]
  p.rule :AND_EXPR,    [and_term, :and, eq_term]
  p.rule :EQ_EXPR,     [eq_term, eq_operators, is_term]
  p.rule :EQ_EXPR,     [is_term, :is, :not, :null]
  p.rule :EQ_EXPR,     [is_term, :is, :null]
  p.rule :NOT_EXPR,    [:not, not_term]
  p.rule :PAREN_EXPR,  [:'(', :EXPR, :')']
  p.rule :LITERAL,     [[:number, :string]]
  p.rule :AGGREGATE,   [:id, :'(', [:id, :'*'], :')']
end
