(function (global) {
  var parensTable = [
  { "num": 0,
    "shifts": { "S": 1, "(": 2},
    "reductions": [
      { "produces": "S",
        "lookaheads": [")", "$"],
        "nReducedSymbols": 0 }
    ]
  },
  { "num": 1,
    "shifts": { },
    "reductions": [
      { "produces": "S'",
        "lookaheads": ["$"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 2,
    "shifts": { "S": 3, "(": 2},
    "reductions": [
      { "produces": "S",
        "lookaheads": [")", "$"],
        "nReducedSymbols": 0 }
    ]
  },
  { "num": 3,
    "shifts": { ")": 4},
    "reductions": [

    ]
  },
  { "num": 4,
    "shifts": { "S": 5, "(": 2},
    "reductions": [
      { "produces": "S",
        "lookaheads": [")", "$"],
        "nReducedSymbols": 0 }
    ]
  },
  { "num": 5,
    "shifts": { },
    "reductions": [
      { "produces": "S",
        "lookaheads": [")", "$"],
        "nReducedSymbols": 4 }
    ]
  }
  ];

  global.ParensParser = function () {
    return new Parser(parensTable, "S'", new ParensLexer());
  }
}(this));
