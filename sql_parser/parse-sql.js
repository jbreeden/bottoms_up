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
    "shifts": { "FIELD_LIST": 6, "FIELD": 7, "id": 8, "*": 9, "FN_CALL": 10},
    "reductions": [

    ]
  },
  { "num": 4,
    "shifts": { "WHERE": 11, "GROUP_BY": 12, "ORDER_BY": 13, "LIMIT": 14, "where": 15, "group": 16, "order": 17, "limit": 18},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 5,
    "shifts": { "id": 19},
    "reductions": [

    ]
  },
  { "num": 6,
    "shifts": { ",": 20},
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
    "shifts": { "as": 21, "(": 22},
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
    "shifts": { },
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 11,
    "shifts": { "GROUP_BY": 23, "ORDER_BY": 24, "LIMIT": 25, "group": 16, "order": 17, "limit": 18},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 12,
    "shifts": { "ORDER_BY": 26, "LIMIT": 27, "HAVING": 28, "order": 17, "limit": 18, "having": 29},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 13,
    "shifts": { "LIMIT": 30, "limit": 18},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 14,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 15,
    "shifts": { "EXPR": 31, "EQ_EXPR": 32, "id": 33, "LITERAL": 34, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 16,
    "shifts": { "by": 37},
    "reductions": [

    ]
  },
  { "num": 17,
    "shifts": { "by": 38},
    "reductions": [

    ]
  },
  { "num": 18,
    "shifts": { "number": 39},
    "reductions": [

    ]
  },
  { "num": 19,
    "shifts": { },
    "reductions": [
      { "produces": "FROM",
        "lookaheads": ["having", "$", "limit", "order", "group", "where"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 20,
    "shifts": { "FIELD": 40, "id": 8, "*": 9, "FN_CALL": 10},
    "reductions": [

    ]
  },
  { "num": 21,
    "shifts": { "id": 41},
    "reductions": [

    ]
  },
  { "num": 22,
    "shifts": { "id": 42},
    "reductions": [

    ]
  },
  { "num": 23,
    "shifts": { "ORDER_BY": 43, "LIMIT": 44, "HAVING": 45, "order": 17, "limit": 18, "having": 29},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 24,
    "shifts": { "LIMIT": 46, "limit": 18},
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
    "shifts": { "LIMIT": 47, "limit": 18},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 27,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 28,
    "shifts": { "ORDER_BY": 48, "LIMIT": 49, "order": 17, "limit": 18},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 29,
    "shifts": { "EXPR": 50, "EQ_EXPR": 32, "id": 33, "LITERAL": 34, "number": 35, "string": 36},
    "reductions": [

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
    "shifts": { },
    "reductions": [
      { "produces": "WHERE",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 32,
    "shifts": { },
    "reductions": [
      { "produces": "EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 33,
    "shifts": { "=": 51, "<>": 52, ">": 53, "<": 54, ">=": 55, "<=": 56, "like": 57},
    "reductions": [

    ]
  },
  { "num": 34,
    "shifts": { "=": 58, "<>": 59, ">": 60, "<": 61, ">=": 62, "<=": 63, "like": 64},
    "reductions": [

    ]
  },
  { "num": 35,
    "shifts": { },
    "reductions": [
      { "produces": "LITERAL",
        "lookaheads": ["like", "<=", ">=", "<", ">", "<>", "=", "having", "$", "limit", "order", "group"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 36,
    "shifts": { },
    "reductions": [
      { "produces": "LITERAL",
        "lookaheads": ["like", "<=", ">=", "<", ">", "<>", "=", "having", "$", "limit", "order", "group"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 37,
    "shifts": { "ID_LIST": 65, "id": 66},
    "reductions": [

    ]
  },
  { "num": 38,
    "shifts": { "id": 67},
    "reductions": [

    ]
  },
  { "num": 39,
    "shifts": { },
    "reductions": [
      { "produces": "LIMIT",
        "lookaheads": ["$"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 40,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD_LIST",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 41,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 42,
    "shifts": { ")": 68},
    "reductions": [

    ]
  },
  { "num": 43,
    "shifts": { "LIMIT": 69, "limit": 18},
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
    "shifts": { "ORDER_BY": 70, "LIMIT": 71, "order": 17, "limit": 18},
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
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 48,
    "shifts": { "LIMIT": 72, "limit": 18},
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
    "shifts": { },
    "reductions": [
      { "produces": "HAVING",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 51,
    "shifts": { "LITERAL": 73, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 52,
    "shifts": { "LITERAL": 74, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 53,
    "shifts": { "LITERAL": 75, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 54,
    "shifts": { "LITERAL": 76, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 55,
    "shifts": { "LITERAL": 77, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 56,
    "shifts": { "LITERAL": 78, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 57,
    "shifts": { "LITERAL": 79, "number": 35, "string": 36},
    "reductions": [

    ]
  },
  { "num": 58,
    "shifts": { "id": 80},
    "reductions": [

    ]
  },
  { "num": 59,
    "shifts": { "id": 81},
    "reductions": [

    ]
  },
  { "num": 60,
    "shifts": { "id": 82},
    "reductions": [

    ]
  },
  { "num": 61,
    "shifts": { "id": 83},
    "reductions": [

    ]
  },
  { "num": 62,
    "shifts": { "id": 84},
    "reductions": [

    ]
  },
  { "num": 63,
    "shifts": { "id": 85},
    "reductions": [

    ]
  },
  { "num": 64,
    "shifts": { "id": 86},
    "reductions": [

    ]
  },
  { "num": 65,
    "shifts": { ",": 87},
    "reductions": [
      { "produces": "GROUP_BY",
        "lookaheads": ["having", "$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 66,
    "shifts": { },
    "reductions": [
      { "produces": "ID_LIST",
        "lookaheads": [",", "having", "$", "limit", "order"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 67,
    "shifts": { "asc": 88, "desc": 89},
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 68,
    "shifts": { },
    "reductions": [
      { "produces": "FN_CALL",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 69,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 70,
    "shifts": { "LIMIT": 90, "limit": 18},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 71,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 72,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
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
      { "produces": "EQ_EXPR",
        "lookaheads": ["having", "$", "limit", "order", "group"],
        "nReducedSymbols": 3 }
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
    "shifts": { "id": 91},
    "reductions": [

    ]
  },
  { "num": 88,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 89,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 90,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 7 }
    ]
  },
  { "num": 91,
    "shifts": { },
    "reductions": [
      { "produces": "ID_LIST",
        "lookaheads": [",", "having", "$", "limit", "order"],
        "nReducedSymbols": 3 }
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
      groupby: [],
      aggregates: [],
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
          + self.filter.literal;         // TODO: Convert
      }

      if (self.groupby) {
        // Stats needs aggregate functions from select, & any ids in the groupby
        // TODO
        var aggregate_clause = self.aggregates.map(function (agg) {
          return agg.fn + "(\"" + agg.field + "\")"
        }).join(' ');
        search = search + "\n  | stats " + aggregate_clause + " by " + self.groupby.join(', ');
      }

      if (self.having) {
        search = search + "\n  | search "
          + self.having.field + " "
          + self.having.comparison + " " // TODO: Convert
          + self.having.literal;         // TODO: Convert
      }

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

    self.internalParse = self.parse;

    self.parse = function (input, callback) {
      reset();
      self.internalParse(input, callback);
    };

    self.transcompile = function (input, callback) {
      reset();
      self.internalParse(input, function (error, ast) {
        callback(error, ast, self.query);
      });
    };

    function reset() {
      self.query = new QueryObject();
      initCallbacks();
    }

    // Callbacks may be added/removed in certain contexts.
    // If the parse fails (or short-circuits for any reason)
    // these callbacks will not be cleaned up for the next run.
    // Therefore, we must re-init them on each parse.
    function initCallbacks() {
      self.resetCallbacks();

      self.onShift('select', function () {
        function addFieldToProjection(node) {
          // FIELD -> :id (:as :id|:e) | AGGREGATE_FN
          var firstChildSymbol = node.children[0].symbol;
          if (firstChildSymbol == '*') {
            self.query.projectAll = true;
          } else if (firstChildSymbol == 'FN_CALL') {
            // FIELD -> FN_CALL -> id ( id )
            self.query.aggregates.push({
              fn: node.children[0].children[0].name,
              field: node.children[0].children[2].name
            });

            // Need to add to the projection so a subsequent
            // `stats` call can perform the aggregate.
            self.query.projection.push(node.children[0].children[2].name);
          } else {
            var fieldName = node.children[0].name;
            self.query.projection.push(fieldName);
            if (node.children.length == 3) {
              self.query.aliases[fieldName] = node.children[2].name;
            }
          }
        };

        self.onReduce('FIELD', addFieldToProjection);
        self.onReduce('SELECT', function () {
          self.offReduce('FIELD', addFieldToProjection);
        });
      });

      self.onReduce('FROM', function (node) {
        // FROM -> from id
        self.query.from = node.children[1].name;
      });

      self.onReduce('WHERE', function (node) {
        // WHERE -> where EXPR
        self.query.filter = readExprNode(node.children[1]);
      });

      var addIdToGroupBy = function (token) {
        self.query.groupby.push(token.name);
      };
      self.onShift('group', function (token) {
        self.onShift('id', addIdToGroupBy);
        self.onReduce('GROUP_BY', function () {
          self.offShift('id', addIdToGroupBy);
        });
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
    };

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
