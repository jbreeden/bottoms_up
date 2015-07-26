require_relative '../parser'

parser = LR0.new(:E) do |p|
  p.rule :E, [:A, :'1']
  p.rule :E, [:B, :'1']
  p.rule :A, [:'1']
  p.rule :B, [:'1']
end

parser.dump_html
