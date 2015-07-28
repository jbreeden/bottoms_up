(function (global) {
  global.ParensLexer = function () {
    return new Lexer()
      .on(/^\(/, function (match) {
        return { symbol: '(' };
      })
      .on(/^\)/, function (match) {
        return { symbol: ')' };
      })
      .eof({ symbol: '$' });
  };
}(this));
