# bottoms_up
Bottom-up NFA, DFA, and parser generation for BNF grammars.

Work in progress. Currently generates an LR0 NFA & DFA for a given grammar.
The NFA & DFA can be dumped as HTML tables. Inspecting these tables can help
you reason about the grammar and target parser (or just do your compilers homework).

## Grammar Syntax
Grammars are specified in pure Ruby. The `BottomsUp` constructor expects a block, which
it passes itself into. Inside the block, you call `BottomsUp#rule` to define grammar rules.
The signature of `BottomsUp#rule` is `rule(non_terminal: Symbol, production: Array<Symbols>)`

Note that the start symbol is supplied as the only argument to the constructor. This must
correspond to at lease one production rule in the grammar. (Otherwise the grammar just don't make no sense.)

Ex (Balanced Parens)
```Ruby
parser = BottomsUp.new(:S) do |p|
  p.rule :S, [:'(', :S, :')', :S]
  p.rule :S, [:e]
end

parser.dump_html
```

### Alternation
A single level of alternation is allowed in each rule. This is done by including an array of
symbols in the rule.

Ex (Dangling Else Problem)
```Ruby
parser = BottomsUp.new(:S) do |p|
  p.rule :S, [[:I, :other]]
  p.rule :I, [:if, :S]
  p.rule :I, [:if, :S, :else, :S]
end

parser.dump_html
```

### Epsilon
Epsilon (the empty string) is represented by the symbol `:e`. This is significant to the
generator, so this symbol cannot be used for any other purpose. (See the Balanced Parens example above.)
