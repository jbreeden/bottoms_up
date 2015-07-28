require_relative '../parser'

$parser = BottomsUp.new(:QUERY) do |p|
  p.rule :QUERY,      [:SELECT, :FROM, [:WHERE, :e], [:GROUP_BY, :e], [:ORDER_BY, :e], [:LIMIT, :e]]
  p.rule :SELECT,     [:select, :FIELD_LIST]
  p.rule :FIELD_LIST, [:'*']
  p.rule :FIELD_LIST, [:FIELD_LIST, :',', :FIELD]
  p.rule :FIELD_LIST, [:FIELD]
  p.rule :FIELD,      [:id]
  p.rule :FIELD,      [:id, :as, :id]
  p.rule :FROM,       [:from, :id]
  p.rule :WHERE,      [:where, :EXPR]
  p.rule :EXPR,       [[:EQ_EXPR]]
  p.rule :EQ_EXPR,    [:id, [:'=', :'<>', :'>', :'<', :'>=', :'<='], :LITERAL]
  p.rule :EQ_EXPR,    [:LITERAL, [:'=', :'<>', :'>', :'<', :'>=', :'<='], :id]
  p.rule :LITERAL,    [[:number, :string]]
  p.rule :LIMIT,      [:limit, :number] # TODO, int type?
  p.rule :GROUP_BY,    [:group, :by, :id] # TODO expr type? (for "function calls" like max(column_name) )
  p.rule :ORDER_BY,   [:order, :by, :id, [:asc, :dec, :e]] # TODO expression instead of ID?
end
