_ = require('underscore');

process.on('uncaughtException', function(err) {
    console.log(err.stack);
});

(function (global) {

  global.Parser = function (table, finalSymbol, lexer) {
    if (this == global) {
      return new Parser(table, lexer);
    }

    this.table = table;
    this.lexer = lexer;
    this.stack = [0];
    this.trace = false;
    this.finalSymbol = finalSymbol;
  }

  Parser.prototype.parse = function(input, callback) {
    var self = this;
    self.accepted = false;
    try {
      self.lexer.lex(input, self.acceptToken.bind(self));
      if (self.accepted) {
        callback(null, self.accepted);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  Parser.prototype.acceptToken = function (token) {
    if (this.trace) {
      console.log("At state " + this.state().num + " accepted token " + token.symbol);
    }
    this.processLookahead(token);
  };

  Parser.prototype.processLookahead = function (token) {
    var state = this.state();
    var reduction = _(state.reductions)
      .find (function (r) {
        return _.contains(r.lookaheads, token.symbol);
      });

    // Shift to next state if a shift exists for the current token
    if (_.chain(state.shifts).keys().contains(token.symbol).value()) {
      this.shift(state, token);
    } else if (reduction != null) {
      this.reduce(reduction);

      if (this.accepted) return;

      // Now that the new state is established, try again with the same symbol.
      // (This is the "lookahead" part. The symbol is not shifted until a shift item is in the current state.
      //  until then, the token has yet to be processed)
      this.processLookahead(token);
    } else {
      throw "Parse error. Unexpected token " + token.symbol + ". Expected one of: " +
        Object.keys(this.state().shifts).concat(_.flatten(this.state().reductions.map(function (r) { return r.lookaheads })));
    }
  }

  Parser.prototype.shift = function (state, token) {
    var next_state = state.shifts[token.symbol];
    if (this.trace) {
      console.log("Shifting to " + next_state);
    }
    this.stack.push(token);
    this.stack.push(next_state);
  };

  Parser.prototype.reduce = function (reduction) {
    // Need to pop the symbols & the states
    var children = [];
    if (this.trace) {
      console.log("Reducing to " + reduction.produces);
    }
    for (var i = 0; i < reduction.nReducedSymbols; i++) {
      this.stack.pop(); // Pop the state for the child
      children.unshift(this.stack.pop()); // Pop the child itself
    }

    var node = { symbol: reduction.produces, children: children };

    // Just reduced the final symbol? Accept.
    if (node.symbol == this.finalSymbol) {
      this.accepted = node;
      return;
    }

    this.goto(node);
  };

  Parser.prototype.goto = function (node) {
    // Now, push the new non-terminal, and the correct current state.
    // ("correct" is a total cop-out of a comment, I know.)
    if (this.trace) {
      console.log("Going to state " + this.state().shifts[node.symbol]);
    }
    var nextState = this.state().shifts[node.symbol];
    this.stack.push(node);
    this.stack.push(nextState);
  };

  Parser.prototype.state = function () {
    return this.table[_.last(this.stack)];
  };

}(global));

(function (global) {
  global.Lexer = function () {
    if (this == global) {
      return new Lexer;
    }
    this.matchers = [];
  };

  Lexer.prototype.on = function (regex, tokenGenerator) {
    this.matchers.push({ regex: regex, fn: tokenGenerator });
    return this;
  };

  Lexer.prototype.eof = function (token) {
    this.eof = token;
  };

  Lexer.prototype.lex = function (input, callback) {
    var match = null;
    while (input.length > 0) {
      var matched = false;
      for (var i = 0; i < this.matchers.length; i++) {
        var matcher = this.matchers[i];
        match = input.match(matcher.regex);
        if (match != null) {
          matched = true;
          var token = matcher.fn(match[0]);
          callback(token);
        }
        if (matched) break;
      }
      if (!matched) {
        throw "Lexer error at: " + input.slice(0, 10);
      }
      input = input.slice(match[0].length);
    }
    callback(this.eof);
  };
}(global));

//---
// Cient Portion
//---

var lexer = new Lexer;
lexer
  .on(/^\(/, function (match) {
    return { symbol: '(' };
  })
  .on(/^\)/, function (match) {
    return { symbol: ')' };
  })
  .eof({ symbol: '$' });

parser = new Parser(getTable(), "S'", lexer);
parser.trace = true;

parser.parse('(()())()', function (error, ir) {
  console.log(JSON.stringify(ir));
});


//---
// Parsing Table
//---

function getTable() {
  return [
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
}
