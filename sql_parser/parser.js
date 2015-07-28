(function (global) {

  global.Parser = function (table, finalSymbol, lexer) {
    if (this == global) {
      return new Parser(table, lexer);
    }

    this.table = table;
    this.lexer = lexer;
    this.stack = [0];
    this.trace = Trace.error;
    this.finalSymbol = finalSymbol;
    this.reduceCallbacks = {};
  }

  Parser.prototype.parse = function(input, callback) {
    var self = this;
    self.accepted = false;
    self.stack = [0];
    try {
      self.lexer.lex(input, self.acceptToken.bind(self));
      if (self.accepted) {
        callback(null, self.accepted);
      } else if (this.error) {
        callback(this.error, null);
      } else {
        callback("Unknown error", null);
      }
    } catch (ex) {
      this.log(ex);
      callback(ex, null);
    }
  };

  Parser.prototype.acceptToken = function (token) {
    if (this.trace >= Trace.debug) {
      this.log("At state " + this.state().num + " accepted token " + token.symbol);
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
      var unexpected = token.symbol == "$" ? "EOF" : token.symbol;
      throw "Parse error. Unexpected symbol " + unexpected + ". Expected one of: " +
        Object.keys(this.state().shifts).concat(_.flatten(this.state().reductions.map(function (r) { return r.lookaheads }))) +
        " (At '" + this.lexer.getContext() + "')";
    }
  }

  Parser.prototype.shift = function (state, token) {
    var next_state = state.shifts[token.symbol];
    if (this.trace >= Trace.info) {
      this.log("Shifting to " + next_state);
    }
    this.stack.push(token);
    this.stack.push(next_state);
  };

  Parser.prototype.onReduce = function (symbol, callback) {
    this.reduceCallbacks[symbol] = callback;
  };

  Parser.prototype.reduce = function (reduction) {
    // Need to pop the symbols & the states
    var children = [];
    if (this.trace >= Trace.info) {
      this.log("Reducing to " + reduction.produces);
    }
    for (var i = 0; i < reduction.nReducedSymbols; i++) {
      this.stack.pop(); // Pop the state for the child
      children.unshift(this.stack.pop()); // Pop the child itself
    }

    var node = { symbol: reduction.produces, children: children };

    // Gives the client a chance to process the reduced AST node
    if (this.reduceCallbacks[reduction.produces]) {
      this.reduceCallbacks[reduction.produces](node);
    }

    // Just reduced the final symbol? Accept.
    if (node.symbol == this.finalSymbol) {
      /* Client doesn't care about the augmented final symbol,
         Give them the start symbol they defined. (The first child) */
      this.accepted = node.children[0];
      return;
    }

    this.goto(node);
  };

  Parser.prototype.goto = function (node) {
    // Now, push the new non-terminal, and the correct current state.
    // ("correct" is a total cop-out of a comment, I know.)
    if (this.trace >= Trace.info) {
      this.log("Going to state " + this.state().shifts[node.symbol]);
    }
    var nextState = this.state().shifts[node.symbol];
    this.stack.push(node);
    this.stack.push(nextState);
  };

  Parser.prototype.state = function () {
    return this.table[_.last(this.stack)];
  };

  Parser.prototype.setTraceLevel = function (level) {
    this.trace = level;
    this.lexer.setTraceLevel(level);
  }

  Parser.prototype.log = function () {
    var args = Array.prototype.slice.apply(arguments);
    args.unshift('PARSER: ')
    console.log.apply(console, args);
  }

}(this));
