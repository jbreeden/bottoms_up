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
    "shifts": { "id": 45},
    "reductions": [

    ]
  },
  { "num": 25,
    "shifts": { "id": 46},
    "reductions": [

    ]
  },
  { "num": 26,
    "shifts": { "ORDER_BY": 47, "LIMIT": 48, "HAVING": 49, "order": 18, "limit": 19, "having": 32},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 27,
    "shifts": { "LIMIT": 50, "limit": 19},
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
    "shifts": { "LIMIT": 51, "limit": 19},
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
    "shifts": { "ORDER_BY": 52, "LIMIT": 53, "order": 18, "limit": 19},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 32,
    "shifts": { "EXPR": 54, "EQ_EXPR": 35, "id": 36, "LITERAL": 37, "number": 38, "string": 39},
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
    "shifts": { "=": 55, "<>": 56, ">": 57, "<": 58, "!>": 59, "!<": 60, ">=": 61, "<=": 62, "like": 63},
    "reductions": [

    ]
  },
  { "num": 37,
    "shifts": { "=": 64, "<>": 65, ">": 66, "<": 67, "!>": 68, "!<": 69, ">=": 70, "<=": 71, "like": 72},
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
    "shifts": { "ID_LIST": 73, "id": 74},
    "reductions": [

    ]
  },
  { "num": 41,
    "shifts": { "id": 75},
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
    "shifts": { ")": 76},
    "reductions": [

    ]
  },
  { "num": 46,
    "shifts": { },
    "reductions": [
      { "produces": "FIELD",
        "lookaheads": [",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 47,
    "shifts": { "LIMIT": 77, "limit": 19},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 48,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 49,
    "shifts": { "ORDER_BY": 78, "LIMIT": 79, "order": 18, "limit": 19},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 50,
    "shifts": { },
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
    "shifts": { "LIMIT": 80, "limit": 19},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 53,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 5 }
    ]
  },
  { "num": 54,
    "shifts": { },
    "reductions": [
      { "produces": "HAVING",
        "lookaheads": ["$", "limit", "order"],
        "nReducedSymbols": 2 }
    ]
  },
  { "num": 55,
    "shifts": { "LITERAL": 81, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 56,
    "shifts": { "LITERAL": 82, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 57,
    "shifts": { "LITERAL": 83, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 58,
    "shifts": { "LITERAL": 84, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 59,
    "shifts": { "LITERAL": 85, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 60,
    "shifts": { "LITERAL": 86, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 61,
    "shifts": { "LITERAL": 87, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 62,
    "shifts": { "LITERAL": 88, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 63,
    "shifts": { "LITERAL": 89, "number": 38, "string": 39},
    "reductions": [

    ]
  },
  { "num": 64,
    "shifts": { "id": 90},
    "reductions": [

    ]
  },
  { "num": 65,
    "shifts": { "id": 91},
    "reductions": [

    ]
  },
  { "num": 66,
    "shifts": { "id": 92},
    "reductions": [

    ]
  },
  { "num": 67,
    "shifts": { "id": 93},
    "reductions": [

    ]
  },
  { "num": 68,
    "shifts": { "id": 94},
    "reductions": [

    ]
  },
  { "num": 69,
    "shifts": { "id": 95},
    "reductions": [

    ]
  },
  { "num": 70,
    "shifts": { "id": 96},
    "reductions": [

    ]
  },
  { "num": 71,
    "shifts": { "id": 97},
    "reductions": [

    ]
  },
  { "num": 72,
    "shifts": { "id": 98},
    "reductions": [

    ]
  },
  { "num": 73,
    "shifts": { ",": 99},
    "reductions": [
      { "produces": "GROUP_BY",
        "lookaheads": ["having", "$", "limit", "order"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 74,
    "shifts": { },
    "reductions": [
      { "produces": "ID_LIST",
        "lookaheads": [",", "having", "$", "limit", "order"],
        "nReducedSymbols": 1 }
    ]
  },
  { "num": 75,
    "shifts": { "asc": 100, "desc": 101},
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 3 }
    ]
  },
  { "num": 76,
    "shifts": { },
    "reductions": [
      { "produces": "AGGREGATE",
        "lookaheads": ["as", ",", "having", "limit", "order", "group", "where", "from"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 77,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
    ]
  },
  { "num": 78,
    "shifts": { "LIMIT": 102, "limit": 19},
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
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
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 6 }
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
    "shifts": { "id": 103},
    "reductions": [

    ]
  },
  { "num": 100,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 101,
    "shifts": { },
    "reductions": [
      { "produces": "ORDER_BY",
        "lookaheads": ["$", "limit"],
        "nReducedSymbols": 4 }
    ]
  },
  { "num": 102,
    "shifts": { },
    "reductions": [
      { "produces": "QUERY",
        "lookaheads": ["$"],
        "nReducedSymbols": 7 }
    ]
  },
  { "num": 103,
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
      evals: [],
      distinct: false,
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
      // Note: Don't generate a `fields` command if there are groupings,
      //       the `stats` command will handle this
      if (!self.projectAll && self.groupby.length == 0) {
        search = search + "\n  | fields "
          + self.projection.map(quoteForSearch).join(' ');
      }

      // Apply aliases
      if (Object.keys(self.aliases).length != 0) {
        search = search + "\n  | rename " + Object.keys(self.aliases).map(function (field) {
          return quoteForSearch(field) + " AS " + quoteForSearch(self.aliases[field]);
        }).join(' ');
      }

      if (self.filter) {
        search = search + "\n  | where " + filterToEvalExpr(self.filter);
      }

      if (self.distinct) {
        search = search + "\n  | uniq"
      }

      if (self.groupby.length > 0) {
        var aggregate_clause = self.aggregates.map(function (agg) {
          return agg.fn + "(\"" + agg.field + "\")" + " AS " + quoteForSearch(agg.alias);
        }).join(' ');

        search = search
          + "\n  | stats "
          + aggregate_clause
          + " by "
          + self.groupby.map(quoteForSearch).join(', ');
      }

      if (self.having) {
        search = search + "\n  | where " + filterToEvalExpr(self.having);
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

    function filterToEvalExpr(expr) {
      var literal = (typeof expr.literal == 'number'
          ? expr.literal
          : quoteStringForEval(expr.literal));

      console.log("Expr to eval: ", expr)

      if (expr.comparison == 'like') {
        return "like("
          + quoteFieldForEval(expr.field)
          + ", "
          + literal + ')';
      } else if (expr.comparison == '<>') {
        return quoteFieldForEval(expr.field) + " != " + literal;
      } else if (expr.comparison == '!<') {
        return quoteFieldForEval(expr.field) + " >= " + literal;
      } else if (expr.comparison == '!>') {
        return quoteFieldForEval(expr.field) + " <= " + literal;
      } else {
        // Default best effort
        return quoteFieldForEval(expr.field) + " "
        + expr.comparison + " "
        + literal;
      }
    }

    function quoteForSearch(field) {
      return '"' + field + '"';
    }

    function quoteFieldForEval(field) {
      return "'" + field + "'";
    }

    function quoteStringForEval(str) {
      return '"' + str + '"';
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
        if (!error) {
          error = runSemanticAnalysis(self.query);
        }
        if (error) {
          callback(error);
        } else {
          callback(null, ast, self.query);
        }
      });
    };

    function runSemanticAnalysis(query) {
      return getFirstError([
        convertGroupByWithoutAggregratesToUniq,
        aggregatesOnlyValidWithGroupBy
      ]);

      function getFirstError(functions) {
        return _.find(functions, function (fn) { return fn(); });
      }

      function convertGroupByWithoutAggregratesToUniq() {
        if (query.groupby.length > 0 && query.aggregates.length == 0) {
          query.groupby = [];
          query.distinct = true;
        }
      }

      function aggregatesOnlyValidWithGroupBy() {
        if (query.aggregates.length > 0 && query.groupby.length == 0) {
          return "Aggregate functions are only supported in combination with a GROUP BY clause"
        }
      }
    }

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
          } else if (firstChildSymbol == 'AGGREGATE') {
            // FIELD -> AGGREGATE -> id ( id )
            // FIELD -> AGGREGATE as id
            var aggregate = node.children[0];
            var fnname = aggregate.children[0].name;
            var field = aggregate.children[2].name;
            var alias = null;
            if  (node.children.length == 3) {
              alias = node.children[2].name;
            } else {
              alias = fnname + '(' + field + ')';
            }
            self.query.aggregates.push({
              fn: fnname,
              field: field,
              alias: alias
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

      self.onShift('distinct', function () {
        self.query.distinct = true;
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
