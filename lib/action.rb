module BottomsUp
  class Action; end

  class Reduction < Action
    attr_reader :production
    attr_accessor :lookahead
    alias lookaheads lookahead
    alias lookaheads= lookahead=

    def initialize(production)
      @production = production
    end

    def to_s
      "reduce(#{production.to_s})"
    end
  end

  class Shift < Action
    attr_reader :state, :symbol

    def initialize(symbol, to_state)
      @symbol = symbol
      @state = to_state
    end

    def to_s
      "shift(#{state.num})"
    end
  end

  class Goto < Action
    attr_reader :state, :symbol

    def initialize(symbol, to_state)
      @symbol = symbol
      @state = to_state
    end

    def to_s
      "goto(#{@state.num})"
    end
  end
end
