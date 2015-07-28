(function (global) {
  global.Lexer = function () {
    if (this == global) {
      return new Lexer;
    }
    this.matchers = [];
    this.trace = false;
  };

  Lexer.prototype.skip = function (skipRegex) {
    this.skipRegex = skipRegex;
    return this;
  };

  Lexer.prototype.on = function (regex, tokenGenerator) {
    this.matchers.push({ regex: regex, fn: tokenGenerator });
    return this;
  };

  Lexer.prototype.eof = function (token) {
    this.eof = token;
    return this;
  };

  Lexer.prototype.lex = function (input, callback) {
    var match = null;
    // First pass to remove comments
    this.input = input.replace(/(^|\n)\s*--[^\n]*/g, '');
    while (this.input.length > 0) {
      var skip = null;
      while (skip = this.input.match(this.skipRegex)) {
        this.input = this.input.slice(skip[0].length);
      }

      var matched = false;
      for (var i = 0; i < this.matchers.length; i++) {
        var matcher = this.matchers[i];
        match = this.input.match(matcher.regex);

        if (this.trace >= Trace.debug) {
          if (match == null)
            this.log(this.getContext() + " did not match " + matcher.regex.toString());
          else
            this.log("Matched input " + match[0] + " to " + matcher.regex.toString());
        }

        if (match != null) {
          matched = true;
          var token = matcher.fn(match);
          callback(token);
        }
        if (matched) break;
      }
      if (!matched) {
        if (this.trace >= Trace.error) this.log('Could not match ' + this.getContext());
        throw "Lexer error at: " + this.getContext();
      }

      /* Shift the input */
      if (typeof match[1] == 'undefined') {
        /* No groupings in the matching regex. Shift past the entire match */
        this.input = this.input.slice(match[0].length);
      } else {
        /* There were groupings. First one assumed to be the only token to process */
        /* Parts of the match after the first grouping are used as lookaheads */
        /* Note this implies that the first grouping MUST begin at ^ */
        this.input = this.input.slice(match[1].length);
      }
    }
    callback(this.eof);
  };

  Lexer.prototype.getContext = function () {
    var context =  this.input.slice(0, 15);
    if (context.length < 15) {
      context = context + "EOF";
    } else {
      context = context + '...';
    }
    return context;
  }

  Lexer.prototype.setTraceLevel = function (level) {
    this.trace = level;
  }

  Lexer.prototype.log = function () {
    var args = Array.prototype.slice.apply(arguments);
    args.unshift('LEXER: ')
    console.log.apply(console, args);
  }
}(this));
