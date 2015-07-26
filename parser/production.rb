class LR0
  class Production
    def initialize(non_terminal, symbols)
      @non_terminal = non_terminal
      @symbols = symbols
      @items = symbols.each_with_index.map { |sym, i|
        Item.new(self, i)
      }
      @items.push(Item.new(self, symbols.length))
    end

    def non_terminal
      @non_terminal
    end

    def symbols
      @symbols.dup
    end

    def items
      @items.dup
    end

    def items_at_step(step)
      @items.select { |i| i.step == step }
    end

    def start_items
      items.select{ |i| i.start_item? }
    end

    def ==(other)
      non_terminal == other.non_terminal && symbols == other.symbols
    end

    def to_s
      "#{non_terminal.symbol} -> #{symbols.join(' ')}"
    end
  end
end
