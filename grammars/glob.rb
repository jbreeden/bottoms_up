require_relative '../parser'

$parser = BottomsUp.new(:GLOB) do |p|
  p.rule(:GLOB, [:SEGMENT_LIST, :'$'])
  p.rule(:GLOB, [:slash, :SEGMENT_LIST, :'$'])
  p.rule(:SEGMENT_LIST, [:SEGMENT])
  p.rule(:SEGMENT_LIST, [:SEGMENT_LIST, :slash, :SEGMENT])
  p.rule(:SEGMENT, [[:GROUP, :STRING]])
  p.rule(:SEGMENT, [:SEGMENT, :SEGMENT])
  p.rule(:GROUP, [:open_group, :close_group])
  p.rule(:GROUP, [:open_group, :STRING_LIST, :close_group])
  p.rule(:STRING_LIST, [:STRING])
  p.rule(:STRING_LIST, [:comma])
  p.rule(:STRING_LIST, [:STRING_LIST, :STRING])
  p.rule(:STRING, [:string, :ESCAPE])
  p.rule(:ESCAPE, [:backslash, [:string, :backslash, :open_group, :comma, :close_group]])
end
