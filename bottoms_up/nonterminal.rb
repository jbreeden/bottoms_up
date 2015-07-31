class BottomsUp
  class NonTerminal
    def initialize(symbol)
      @symbol = symbol
      @productions = []
    end

    def produces(tokens)
      if tokens.kind_of?(Production)
        @productions.push(tokens)
      else
        @productions.push Production.new(self, tokens)
      end
    end

    def productions
      @productions.dup
    end

    def symbol
      @symbol
    end

    def start_items
      @productions.flat_map { |p| p.items }.select { |i| i.start_item? }
    end

    def ==(other)
      symbol == other.symbol
    end
  end
end
