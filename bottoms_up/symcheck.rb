module BottomsUp
  module SymCheck
    def self.terminal?(sym)
      char = sym.to_s[0]
      char.downcase == char
    end

    def self.non_terminal?(sym)
      !terminal?(sym)
    end
  end
end
