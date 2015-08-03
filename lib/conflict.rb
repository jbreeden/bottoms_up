module BottomsUp
  class Conflict
    attr_accessor :type, :state, :lookahead, :actions
    def initialize(type, state, lookahead, actions)
      @type = type
      @state = state
      @lookahead = lookahead
      @actions = actions
    end

    def to_s
      <<EOS
#{@type} Conflict at State ##{@state.num}
  Lookahead
    #{lookahead}
  Actions
    #{actions.map { |a| a.to_s }.join("\n    ")}
EOS
    end
  end
end
