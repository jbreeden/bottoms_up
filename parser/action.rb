class BottomsUp
  class Action; end

  class Reduction < Action
    attr_reader :production
    attr_accessor :lookahead

    def initialize(production)
      @production = production
    end

    def to_s
      "reduce(#{production.to_s})"
    end
  end

  class Shift < Action
    attr_reader :state

    def initialize(to_state_number)
      @state = to_state_number
    end

    def to_s
      "shift(#{state.num})"
    end
  end

  class Goto < Action
    def initialize(to_state_number)
      @state = to_state_number
    end

    def to_s
      "goto(#{@state.num})"
    end
  end
end
