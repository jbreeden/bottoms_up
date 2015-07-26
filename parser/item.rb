class BottomsUp
  class Item
    def initialize(production, step)
      @production = production
      @step = step
    end

    def production
      @production
    end

    def step
      @step
    end

    def start_item?
      @step == 0
    end

    def shift_item?
      !reduction_item? && SymCheck.terminal?(next_symbol)
    end

    def goto_item?
      !reduction_item? && SymCheck.non_terminal?(next_symbol)
    end

    def reduction_item?
      production.symbols == [:e] || @step == (production.symbols.length)
    end

    def next_symbol
      if reduction_item?
        nil
      else
        @production.symbols[step]
      end
    end

    def next_item
      return nil if reduction_item?
      Item.new(@production, step + 1)
    end

    def to_s
      "#{@production.non_terminal.symbol} = #{@production.symbols.insert(@step, '.').join(' ')}"
    end

    def ==(other)
      production == other.production && step == other.step
    end
  end
end
