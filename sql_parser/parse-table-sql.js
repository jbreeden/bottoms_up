(function(global) {
  global.SQLParseTable = function() {
    return [
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
      "shifts": { "distinct": 6, "FIELD_LIST": 7, "FIELD": 8, "id": 9, "*": 10, "AGGREGATE": 11},
      "reductions": [

      ]
    },
    { "num": 4,
      "shifts": { "WHERE": 12, "GROUP_BY": 13, "ORDER_BY": 14, "LIMIT": 15, "where": 16, "group": 17, "order": 18, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 2 }
      ]
    },
    { "num": 5,
      "shifts": { "id": 20},
      "reductions": [

      ]
    },
    { "num": 6,
      "shifts": { "FIELD_LIST": 21, "FIELD": 8, "id": 9, "*": 10, "AGGREGATE": 11},
      "reductions": [

      ]
    },
    { "num": 7,
      "shifts": { ",": 22},
      "reductions": [
        { "produces": "SELECT",
          "lookaheads": ["having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 2 }
      ]
    },
    { "num": 8,
      "shifts": { },
      "reductions": [
        { "produces": "FIELD_LIST",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 9,
      "shifts": { "as": 23, "(": 24},
      "reductions": [
        { "produces": "FIELD",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 10,
      "shifts": { },
      "reductions": [
        { "produces": "FIELD",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 11,
      "shifts": { "as": 25},
      "reductions": [
        { "produces": "FIELD",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 12,
      "shifts": { "GROUP_BY": 26, "ORDER_BY": 27, "LIMIT": 28, "group": 17, "order": 18, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 13,
      "shifts": { "ORDER_BY": 29, "LIMIT": 30, "HAVING": 31, "order": 18, "limit": 19, "having": 32},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 14,
      "shifts": { "LIMIT": 33, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 15,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 16,
      "shifts": { "EXPR": 34, "EQ_EXPR": 35, "id": 36, "LITERAL": 37, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 17,
      "shifts": { "by": 40},
      "reductions": [

      ]
    },
    { "num": 18,
      "shifts": { "by": 41},
      "reductions": [

      ]
    },
    { "num": 19,
      "shifts": { "number": 42},
      "reductions": [

      ]
    },
    { "num": 20,
      "shifts": { },
      "reductions": [
        { "produces": "FROM",
          "lookaheads": ["having", "$", "limit", "order", "group", "where"],
          "nReducedSymbols": 2 }
      ]
    },
    { "num": 21,
      "shifts": { ",": 22},
      "reductions": [
        { "produces": "SELECT",
          "lookaheads": ["having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 22,
      "shifts": { "FIELD": 43, "id": 9, "*": 10, "AGGREGATE": 11},
      "reductions": [

      ]
    },
    { "num": 23,
      "shifts": { "id": 44},
      "reductions": [

      ]
    },
    { "num": 24,
      "shifts": { "id": 45, "*": 46},
      "reductions": [

      ]
    },
    { "num": 25,
      "shifts": { "id": 47},
      "reductions": [

      ]
    },
    { "num": 26,
      "shifts": { "ORDER_BY": 48, "LIMIT": 49, "HAVING": 50, "order": 18, "limit": 19, "having": 32},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 27,
      "shifts": { "LIMIT": 51, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 28,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 29,
      "shifts": { "LIMIT": 52, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 30,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 31,
      "shifts": { "ORDER_BY": 53, "LIMIT": 54, "order": 18, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 32,
      "shifts": { "EXPR": 55, "EQ_EXPR": 35, "id": 36, "LITERAL": 37, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 33,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 34,
      "shifts": { },
      "reductions": [
        { "produces": "WHERE",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 2 }
      ]
    },
    { "num": 35,
      "shifts": { },
      "reductions": [
        { "produces": "EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 36,
      "shifts": { "=": 56, "<>": 57, ">": 58, "<": 59, "!>": 60, "!<": 61, ">=": 62, "<=": 63, "like": 64},
      "reductions": [

      ]
    },
    { "num": 37,
      "shifts": { "=": 65, "<>": 66, ">": 67, "<": 68, "!>": 69, "!<": 70, ">=": 71, "<=": 72, "like": 73},
      "reductions": [

      ]
    },
    { "num": 38,
      "shifts": { },
      "reductions": [
        { "produces": "LITERAL",
          "lookaheads": ["like", "<=", ">=", "!<", "!>", "<", ">", "<>", "=", "having", "$", "limit", "order", "group"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 39,
      "shifts": { },
      "reductions": [
        { "produces": "LITERAL",
          "lookaheads": ["like", "<=", ">=", "!<", "!>", "<", ">", "<>", "=", "having", "$", "limit", "order", "group"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 40,
      "shifts": { "ID_LIST": 74, "id": 75},
      "reductions": [

      ]
    },
    { "num": 41,
      "shifts": { "id": 76},
      "reductions": [

      ]
    },
    { "num": 42,
      "shifts": { },
      "reductions": [
        { "produces": "LIMIT",
          "lookaheads": ["$"],
          "nReducedSymbols": 2 }
      ]
    },
    { "num": 43,
      "shifts": { },
      "reductions": [
        { "produces": "FIELD_LIST",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 44,
      "shifts": { },
      "reductions": [
        { "produces": "FIELD",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 45,
      "shifts": { ")": 77},
      "reductions": [

      ]
    },
    { "num": 46,
      "shifts": { ")": 78},
      "reductions": [

      ]
    },
    { "num": 47,
      "shifts": { },
      "reductions": [
        { "produces": "FIELD",
          "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 48,
      "shifts": { "LIMIT": 79, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 49,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 50,
      "shifts": { "ORDER_BY": 80, "LIMIT": 81, "order": 18, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 51,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 52,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 53,
      "shifts": { "LIMIT": 82, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 54,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 5 }
      ]
    },
    { "num": 55,
      "shifts": { },
      "reductions": [
        { "produces": "HAVING",
          "lookaheads": ["$", "limit", "order"],
          "nReducedSymbols": 2 }
      ]
    },
    { "num": 56,
      "shifts": { "LITERAL": 83, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 57,
      "shifts": { "LITERAL": 84, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 58,
      "shifts": { "LITERAL": 85, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 59,
      "shifts": { "LITERAL": 86, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 60,
      "shifts": { "LITERAL": 87, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 61,
      "shifts": { "LITERAL": 88, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 62,
      "shifts": { "LITERAL": 89, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 63,
      "shifts": { "LITERAL": 90, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 64,
      "shifts": { "LITERAL": 91, "number": 38, "string": 39},
      "reductions": [

      ]
    },
    { "num": 65,
      "shifts": { "id": 92},
      "reductions": [

      ]
    },
    { "num": 66,
      "shifts": { "id": 93},
      "reductions": [

      ]
    },
    { "num": 67,
      "shifts": { "id": 94},
      "reductions": [

      ]
    },
    { "num": 68,
      "shifts": { "id": 95},
      "reductions": [

      ]
    },
    { "num": 69,
      "shifts": { "id": 96},
      "reductions": [

      ]
    },
    { "num": 70,
      "shifts": { "id": 97},
      "reductions": [

      ]
    },
    { "num": 71,
      "shifts": { "id": 98},
      "reductions": [

      ]
    },
    { "num": 72,
      "shifts": { "id": 99},
      "reductions": [

      ]
    },
    { "num": 73,
      "shifts": { "id": 100},
      "reductions": [

      ]
    },
    { "num": 74,
      "shifts": { ",": 101},
      "reductions": [
        { "produces": "GROUP_BY",
          "lookaheads": ["having", "$", "limit", "order"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 75,
      "shifts": { },
      "reductions": [
        { "produces": "ID_LIST",
          "lookaheads": [",", "having", "$", "limit", "order"],
          "nReducedSymbols": 1 }
      ]
    },
    { "num": 76,
      "shifts": { "asc": 102, "desc": 103},
      "reductions": [
        { "produces": "ORDER_BY",
          "lookaheads": ["$", "limit"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 77,
      "shifts": { },
      "reductions": [
        { "produces": "AGGREGATE",
          "lookaheads": ["as", ",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 78,
      "shifts": { },
      "reductions": [
        { "produces": "AGGREGATE",
          "lookaheads": ["as", ",", "having", "limit", "order", "group", "where", "from"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 79,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 6 }
      ]
    },
    { "num": 80,
      "shifts": { "LIMIT": 104, "limit": 19},
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 6 }
      ]
    },
    { "num": 81,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 6 }
      ]
    },
    { "num": 82,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 6 }
      ]
    },
    { "num": 83,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 84,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 85,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 86,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 87,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 88,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 89,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 90,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 91,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 92,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 93,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 94,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 95,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 96,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 97,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 98,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 99,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 100,
      "shifts": { },
      "reductions": [
        { "produces": "EQ_EXPR",
          "lookaheads": ["having", "$", "limit", "order", "group"],
          "nReducedSymbols": 3 }
      ]
    },
    { "num": 101,
      "shifts": { "id": 105},
      "reductions": [

      ]
    },
    { "num": 102,
      "shifts": { },
      "reductions": [
        { "produces": "ORDER_BY",
          "lookaheads": ["$", "limit"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 103,
      "shifts": { },
      "reductions": [
        { "produces": "ORDER_BY",
          "lookaheads": ["$", "limit"],
          "nReducedSymbols": 4 }
      ]
    },
    { "num": 104,
      "shifts": { },
      "reductions": [
        { "produces": "QUERY",
          "lookaheads": ["$"],
          "nReducedSymbols": 7 }
      ]
    },
    { "num": 105,
      "shifts": { },
      "reductions": [
        { "produces": "ID_LIST",
          "lookaheads": [",", "having", "$", "limit", "order"],
          "nReducedSymbols": 3 }
      ]
    }
    ];
  }
}(this));
