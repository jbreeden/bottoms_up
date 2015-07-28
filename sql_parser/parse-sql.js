(function (global) {
  var parseTable = [
  { "num": 0,
    "shifts": { "QUERY": 1, "SELECT": 2, "select": 3},
    "reductions": [

    ]
  },
  { "num": 1,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY'",
        "lookaheads": ["$"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 2,
    "shifts": { "FROM": 4, "from": 5},
    "reductions": [

    ]
  },
  { "num": 3,
    "shifts": { "FIELD_LIST": 6, "*": 7, "FIELD": 8, "id": 9},
    "reductions": [

    ]
  },
  { "num": 4,
    "shifts": { "WHERE": 10, "ORDER_BY": 11, "LIMIT": 12, "where": 13, "order": 14, "limit": 15},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 5,
    "shifts": { "id": 16},
    "reductions": [

    ]
  },
  { "num": 6,
    "shifts": { ",": 17},
    "reductions": [
      { "produces": "SELECT",
        "lookaheads": ["limit", "order", "where", "from"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 7,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD_LIST",
        "lookaheads": [",", "limit", "order", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 8,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD_LIST",
        "lookaheads": [",", "limit", "order", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 9,
    "shifts": { "as": 18},
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "limit", "order", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 10,
    "shifts": { "ORDER_BY": 19, "LIMIT": 20, "order": 14, "limit": 15},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 11,
    "shifts": { "LIMIT": 21, "limit": 15},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 12,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 13,
    "shifts": { "EXPR": 22, "EQ_EXPR": 23, "id": 24, "LITERAL": 25, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 14,
    "shifts": { "by": 28},
    "reductions": [

    ]
  },
  { "num": 15,
    "shifts": { "number": 29},
    "reductions": [

    ]
  },
  { "num": 16,
    "shifts": { },
    "reductions": [
      { "produces": "FROM",
        "lookaheads": ["$", "limit", "order", "where"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 17,
    "shifts": { "FIELD": 30, "id": 9},
    "reductions": [

    ]
  },
  { "num": 18,
    "shifts": { "id": 31},
    "reductions": [

    ]
  },
  { "num": 19,
    "shifts": { "LIMIT": 32, "limit": 15},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 20,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 21,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 22,
    "shifts": { },
    "reductions": [
      { "produces": "WHERE",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 23,
    "shifts": { },
    "reductions": [
      { "produces": "EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 24,
    "shifts": { "=": 33, "<>": 34, ">": 35, "<": 36, ">=": 37, "<=": 38},
    "reductions": [

    ]
  },
  { "num": 25,
    "shifts": { "=": 39, "<>": 40, ">": 41, "<": 42, ">=": 43, "<=": 44},
    "reductions": [

    ]
  },
  { "num": 26,
    "shifts": { },
    "reductions": [
      { "produces": "LITERAL",
        "lookaheads": ["<=", ">=", "<", ">", "<>", "=", "$", "limit", "order"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 27,
    "shifts": { },
    "reductions": [
      { "produces": "LITERAL",
        "lookaheads": ["<=", ">=", "<", ">", "<>", "=", "$", "limit", "order"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 28,
    "shifts": { "id": 45},
    "reductions": [

    ]
  },
  { "num": 29,
    "shifts": { },
    "reductions": [
      { "produces": "LIMIT",
        "lookaheads": ["$"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 30,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD_LIST",
        "lookaheads": [",", "limit", "order", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 31,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "limit", "order", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 32,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 33,
    "shifts": { "LITERAL": 46, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 34,
    "shifts": { "LITERAL": 47, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 35,
    "shifts": { "LITERAL": 48, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 36,
    "shifts": { "LITERAL": 49, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 37,
    "shifts": { "LITERAL": 50, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 38,
    "shifts": { "LITERAL": 51, "number": 26, "string": 27},
    "reductions": [

    ]
  },
  { "num": 39,
    "shifts": { "id": 52},
    "reductions": [

    ]
  },
  { "num": 40,
    "shifts": { "id": 53},
    "reductions": [

    ]
  },
  { "num": 41,
    "shifts": { "id": 54},
    "reductions": [

    ]
  },
  { "num": 42,
    "shifts": { "id": 55},
    "reductions": [

    ]
  },
  { "num": 43,
    "shifts": { "id": 56},
    "reductions": [

    ]
  },
  { "num": 44,
    "shifts": { "id": 57},
    "reductions": [

    ]
  },
  { "num": 45,
    "shifts": { "asc": 58, "dec": 59},
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 46,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 47,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 48,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 49,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 50,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 51,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 52,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 53,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 54,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 55,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 56,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 57,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 58,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 59,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  }
  ];

  global.SQLParser = function () {
    var parser = new Parser(parseTable, "QUERY'", new SQLLexer());

    parser.onReduce('FIELD_LIST', function (node) {
      /* Rewritting children to remove nesting of FIELD_LIST nodes */
      var newChildren = [];
      node.children.forEach(function (child) {
        if (child.symbol == 'FIELD_LIST') {
          newChildren = newChildren.concat(child.children.filter(function (c) {
            return c.symbol == 'FIELD';
          }));
        } else {
          newChildren.push(child);
        }
      });
      node.children = newChildren;
    });

    return parser;
  }
}(this));
