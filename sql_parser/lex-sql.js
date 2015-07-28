(function (global) {
  global.SQLLexer = function () {
    return new Lexer()
      .skip(/^\s+/)
      .on(/^(select)\s+/i, function (match) {
        return { symbol: 'select' };
      })
      .on(/^(from)\s+/i, function (match) {
        return { symbol: 'from' };
      })
      .on(/^(where)\s+/i, function (match) {
        return { symbol: 'where' };
      })
      .on(/^(like)\s+/i, function (match) {
        return { symbol: 'like' };
      })
      .on(/^(as)\s+/i, function (match) {
        return { symbol: 'as' };
      })
      .on(/^(limit)\s+/i, function (match) {
        return { symbol: 'limit' };
      })
      .on(/^(order)\s+/i, function (match) {
        return { symbol: 'order' };
      })
      .on(/^(by)\s+/i, function (match) {
        return { symbol: 'by' };
      })
      .on(/^(asc)\s+/i, function (match) {
        return { symbol: 'asc' };
      })
      .on(/^(dec)\s+/i, function (match) {
        return { symbol: 'dec' };
      })
      .on(/^(group)\s+/i, function (match) {
        return { symbol: 'group' };
      })
      .on(/^(having)\s+/i, function (match) {
        return { symbol: 'having' };
      })
      .on(/^(distinct)\s+/i, function (match) {
        return { symbol: 'distinct' };
      })
      .on(/^([a-zA-Z_][a-zA-Z_0-9]+)/i, function (match) {
        return { symbol: 'id', name: match[1] };
      })
      .on(/^"([a-zA-Z_][a-zA-Z_0-9]+)"/i, function (match) {
        return { symbol: 'id', name: match[1] };
      })
      .on(/^(,)/, function (match) {
        return { symbol: ',' };
      })
      .on(/^(\*)(\s|,)/, function (match) {
        return { symbol: '*' };
      })
      .on(/^(=)\s+/, function (match) {
        return { symbol: '=' };
      })
      .on(/^(<>)\s+/, function (match) {
        return { symbol: '<>' };
      })
      .on(/^(>)\s+/, function (match) {
        return { symbol: '>' };
      })
      .on(/^(<)\s+/, function (match) {
        return { symbol: '<' };
      })
      .on(/^(>=)\s+/, function (match) {
        return { symbol: '>=' };
      })
      .on(/^(<=)\s+/, function (match) {
        return { symbol: '<=' };
      })
      .on(/^((\+|-)?[0-9]+(\.[0-9]+)?)(\s*|$)/, function (match) {
        return { symbol: 'number', value: parseFloat(match[1]) };
      })
      .on(/^('(([^']*|'')*)')\s*/, function(match) {
        return { symbol: 'string', value: match[2].replace(/''/g, "'") }
      })
      .eof({ symbol: '$' });
  };
}(this));
