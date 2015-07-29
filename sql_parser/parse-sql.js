(function (global) {

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
          error = self.query.runSemanticAnalysis();
          if (error) {
            error = "Semantics: " + error;
          }
        }
        if (error) {
          callback(error);
        } else {
          callback(null, ast, self.query);
        }
      });
    };

    function reset() {
      self.query = new QueryIR();
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
            var field = aggregate.children[2].symbol == '*'
              ? '*'
              : aggregate.children[2].name;
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
            // self.query.projection.push(node.children[0].children[2].name);
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
  }

  SQLParser.prototype = new Parser(new SQLParseTable(), "QUERY'", new SQLLexer());

  //---
  // Utils
  //---

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
}(this));
