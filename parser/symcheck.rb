class LR0
  module SymCheck
    def self.terminal?(sym)
      sym.to_s[0].downcase == sym.to_s[0]
    end

    def self.non_terminal?(sym)
      !terminal?(sym)
    end
  end
end
