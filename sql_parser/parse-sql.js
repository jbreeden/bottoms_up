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
    "shifts": { "FIELD_LIST": 6, "FIELD": 7, "id": 8, "*": 9},
    "reductions": [

    ]
  },
  { "num": 4,
    "shifts": { "WHERE": 10, "GROUP_BY": 11, "ORDER_BY": 12, "LIMIT": 13, "where": 14, "group": 15, "order": 16, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 5,
    "shifts": { "id": 18},
    "reductions": [

    ]
  },
  { "num": 6,
    "shifts": { ",": 19},
    "reductions": [
      { "produces": "SELECT",
        "lookaheads": ["having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 7,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD_LIST",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 8,
    "shifts": { "as": 20},
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 9,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 10,
    "shifts": { "GROUP_BY": 21, "ORDER_BY": 22, "LIMIT": 23, "group": 15, "order": 16, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 11,
    "shifts": { "ORDER_BY": 24, "LIMIT": 25, "HAVING": 26, "order": 16, "limit": 17, "having": 27},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 12,
    "shifts": { "LIMIT": 28, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 13,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 14,
    "shifts": { "EXPR": 29, "EQ_EXPR": 30, "id": 31, "LITERAL": 32, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 15,
    "shifts": { "by": 35},
    "reductions": [

    ]
  },
  { "num": 16,
    "shifts": { "by": 36},
    "reductions": [

    ]
  },
  { "num": 17,
    "shifts": { "number": 37},
    "reductions": [

    ]
  },
  { "num": 18,
    "shifts": { },
    "reductions": [
      { "produces": "FROM",
        "lookaheads": ["having", "$", "limit", "order", "group", "where"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 19,
    "shifts": { "FIELD": 38, "id": 8, "*": 9},
    "reductions": [

    ]
  },
  { "num": 20,
    "shifts": { "id": 39},
    "reductions": [

    ]
  },
  { "num": 21,
    "shifts": { "ORDER_BY": 40, "LIMIT": 41, "HAVING": 42, "order": 16, "limit": 17, "having": 27},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 22,
    "shifts": { "LIMIT": 43, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 23,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 24,
    "shifts": { "LIMIT": 44, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 25,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 26,
    "shifts": { "ORDER_BY": 45, "LIMIT": 46, "order": 16, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 27,
    "shifts": { "EXPR": 47, "EQ_EXPR": 30, "id": 31, "LITERAL": 32, "number": 33, "string": 34},
    "reductions": [

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
    "shifts": { },
    "reductions": [
      { "produces": "WHERE",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 30,
    "shifts": { },
    "reductions": [
      { "produces": "EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 31,
    "shifts": { "=": 48, "<>": 49, ">": 50, "<": 51, ">=": 52, "<=": 53, "like": 54},
    "reductions": [

    ]
  },
  { "num": 32,
    "shifts": { "=": 55, "<>": 56, ">": 57, "<": 58, ">=": 59, "<=": 60, "like": 61},
    "reductions": [

    ]
  },
  { "num": 33,
    "shifts": { },
    "reductions": [
      { "produces": "LITERAL",
        "lookaheads": ["like", "<=", ">=", "<", ">", "<>", "=", "having", "$", "limit", "order", "group"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 34,
    "shifts": { },
    "reductions": [
      { "produces": "LITERAL",
        "lookaheads": ["like", "<=", ">=", "<", ">", "<>", "=", "having", "$", "limit", "order", "group"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 35,
    "shifts": { "id": 62},
    "reductions": [

    ]
  },
  { "num": 36,
    "shifts": { "id": 63},
    "reductions": [

    ]
  },
  { "num": 37,
    "shifts": { },
    "reductions": [
      { "produces": "LIMIT",
        "lookaheads": ["$"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 38,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD_LIST",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 39,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 40,
    "shifts": { "LIMIT": 64, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 41,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 42,
    "shifts": { "ORDER_BY": 65, "LIMIT": 66, "order": 16, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 43,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 44,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 45,
    "shifts": { "LIMIT": 67, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 46,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 47,
    "shifts": { },
    "reductions": [
      { "produces": "HAVING",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 48,
    "shifts": { "LITERAL": 68, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 49,
    "shifts": { "LITERAL": 69, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 50,
    "shifts": { "LITERAL": 70, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 51,
    "shifts": { "LITERAL": 71, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 52,
    "shifts": { "LITERAL": 72, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 53,
    "shifts": { "LITERAL": 73, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 54,
    "shifts": { "LITERAL": 74, "number": 33, "string": 34},
    "reductions": [

    ]
  },
  { "num": 55,
    "shifts": { "id": 75},
    "reductions": [

    ]
  },
  { "num": 56,
    "shifts": { "id": 76},
    "reductions": [

    ]
  },
  { "num": 57,
    "shifts": { "id": 77},
    "reductions": [

    ]
  },
  { "num": 58,
    "shifts": { "id": 78},
    "reductions": [

    ]
  },
  { "num": 59,
    "shifts": { "id": 79},
    "reductions": [

    ]
  },
  { "num": 60,
    "shifts": { "id": 80},
    "reductions": [

    ]
  },
  { "num": 61,
    "shifts": { "id": 81},
    "reductions": [

    ]
  },
  { "num": 62,
    "shifts": { },
    "reductions": [
      { "produces": "GROUP_BY",
        "lookaheads": ["having", "$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 63,
    "shifts": { "asc": 82, "desc": 83},
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 64,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 65,
    "shifts": { "LIMIT": 84, "limit": 17},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 66,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 67,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 68,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 69,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 70,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 71,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 72,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 73,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 74,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 75,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 76,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 77,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 78,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 79,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 80,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 81,
    "shifts": { },
    "reductions": [
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 82,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 83,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 84,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 7 }
    ]
  }
  ];

  var QueryObject = function () {
    var self = this;

    _.extend(self, {
      projectAll: false,
      projection: [],
      aliases: {},
      from: null,
      filter: null,
      groupby: null,
      having: null,
      order: null,
      limit: Infinity
    });

    self.toSPL = function () {
      // Select index
      var search = "index=" + self.from;

      // Perform projection
      if (!self.projectAll) {
        search = search + "\n  | fields " + self.projection.join(' ');
      }

      // Apply aliases
      if (Object.keys(self.aliases).length != 0) {
        search = search + "\n  | rename " + Object.keys(self.aliases).map(function (field) {
          return field + " AS " + self.aliases[field];
        }).join(' ');
      }

      if (self.filter) {
        search = search + "\n  | search "
          + self.filter.field + " "
          + self.filter.comparison + " " // TODO: Convert
          + self.filter.literal;   // TODO: Convert
      }

      // TODO: Group, having

      if (self.order) {
        search = search + "\n  | sort "
          + (self.order.sort == 'descending' ? '-' : '')
          + self.order.field;
      }

      if (self.limit != Infinity) {
        search = search + "\n  | head " + self.limit;
      }

      return search;
    }
  }

  global.SQLParser = function () {
    var self = this;

    self.initQueryObject = function () {
      self.query = new QueryObject();
    };

    self.internalParse = self.parse;

    self.parse = function (input, callback) {
      self.initQueryObject();
      self.internalParse(input, callback);
    };

    self.transcompile = function (input, callback) {
      self.initQueryObject();
      // TODO: callback with query object on successful parse
      self.internalParse(input, function (error, ast) {
        callback(error, ast, self.query /*, query.toSPL() */);
      });
    };

    self.onReduce('FIELD', function (node) {
      // FIELD -> :id (:as :id|:e)
      var isStar = node.children[0].symbol == '*';
      if (isStar) {
        self.query.projectAll = true;
      } else {
        var fieldName = node.children[0].name;
        self.query.projection.push(fieldName);
        if (node.children.length == 3) {
          self.query.aliases[fieldName] = node.children[2].name;
        }
      }
    });

    self.onReduce('FROM', function (node) {
      // FROM -> from id
      self.query.from = node.children[1].name;
    });

    self.onReduce('WHERE', function (node) {
      // WHERE -> where EXPR
      self.query.filter = readExprNode(node.children[1]);
    });

    self.onReduce('GROUP_BY', function (node) {
      // GROUP_BY -> group, by id
      self.query.groupby = node.children[2].name;
    });

    self.onReduce('HAVING', function (node) {
      // HAVING -> having EXPR
      self.query.having = readExprNode(node.children[1]);
    });

    self.onReduce('ORDER_BY', function (node) {
      // ORDER_BY -> order by id (asc|desc|e)
      self.query.order = {
        field: node.children[2].name,
        sort: (node.children.length == 4 && node.children[3].symbol == 'desc') ?
          'descending':
          'ascending'
      }
    });

    self.onReduce('LIMIT', function (node) {
      // LIMIT -> limit number
      self.query.limit = node.children[1].value;
    });

    function readExprNode(exprNode) {
      // EXPR -> EQ_EXPR
      // EQ_EXPR -> id ~fn~ LITERAL
      //            | LITERAL ~fn~ id
      // LITERAL -> number | string
      var id;
      var literal;
      var comparison;

      var eqExprNode = exprNode.children[0];

      eqExprNode.children.forEach(function (child) {
        if (child.symbol == 'id') {
          id = child.name;
        } else if (child.symbol == 'LITERAL') {
          literal = child.children[0].value;
        } else {
          comparison = child.symbol;
        }
      });

      return { field: id, comparison: comparison, literal: literal};
    }
  }

  SQLParser.prototype = new Parser(parseTable, "QUERY'", new SQLLexer());
}(this));
