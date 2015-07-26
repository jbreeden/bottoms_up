require_relative '../parser'

parser = LR0.new(:IF) do |p|
  p.rule :IF, [:IF, :body]
  p.rule :IF, [:IF, :body, :ELSE, :body]
end

parser.dump_html
