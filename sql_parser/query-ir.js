(function (global) {
  global.QueryIR = function () {
    var self = this;

    _.extend(self, {
      projectAll: false,
      projection: [],
      aliases: {},
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

      // From http://tinman.cs.gsu.edu/~raj/sql/node22.html
      //
      //       Conceptual Order of Evaluation of a Select Statement
      //
      // First the product of all tables in the from clause is formed.
      // The where clause is then evaluated to eliminate rows that do not satisfy the search_condition.
      // Next, the rows are grouped using the columns in the group by clause.
      // Then, Groups that do not satisfy the search_condition in the having clause are eliminated.
      // Next, the expressions in the select clause target list are evaluated.
      // If the distinct keyword is present in the select clause, duplicate rows are now eliminated.
      // The union is taken after each sub-select is evaluated.
      // Finally, the resulting rows are sorted according to the columns specified in the order by clause.

      // Select index
      var search = "index=" + self.from;

      if (self.filter) {
        search = search + "\n  | where " + filterToEvalExpr(self.filter);
      }

      if (self.aggregates.length > 0) {
        var aggregate_clause = self.aggregates.map(function (agg) {
          // SQL count(*) has a very different meaning than SPL count(*).
          // In this case, remove the argument for SPL and it behaves like SQL.
          var argv = agg.field == '*' ? "" : '(' + quoteForSearch(agg.field) + ')';
          return agg.fn + argv + " AS " + quoteForSearch(agg.alias);
        }).join(' ');

        var by_clause = "";
        if (self.groupby.length != 0) {
          by_clause = " by " + self.groupby.map(quoteForSearch).join(', ');
        }

        search = search
          + "\n  | stats "
          + aggregate_clause
          + by_clause;
      }

      if (self.having) {
        search = search + "\n  | where " + filterToEvalExpr(self.having);
      }

      // Perform projection
      // Note: Don't generate a `fields` command if there are aggregates,
      //       the `stats` command will handle this
      if (!self.projectAll && self.aggregates.length == 0) {
        search = search + "\n  | fields "
          + self.projection.map(quoteForSearch).join(' ');
      }

      // Distinct -> uniq
      // Note that any aggregates will result in a stats call (equivalent to a group by in SQL)
      // This stats call can only return unique results, so no need to add uniq function
      if (self.distinct && self.aggregates.length == 0) {
        search = search + "\n  | uniq"
      }

      if (self.order) {
        search = search + "\n  | sort "
          + (self.order.sort == 'descending' ? '-' : '')
          + quoteForSearch(self.order.field);
      }

      if (self.limit != Infinity) {
        search = search + "\n  | head " + self.limit;
      }

      // Apply aliases last so we can just work on field names in most of the query
      if (Object.keys(self.aliases).length != 0) {
        search = search + "\n  | rename " + Object.keys(self.aliases).map(function (field) {
          return quoteForSearch(field) + " AS " + quoteForSearch(self.aliases[field]);
        }).join(' ');
      }

      return search;
    }

    function filterToEvalExpr(expr) {
      var literal = (typeof expr.literal == 'number'
          ? expr.literal
          : quoteStringForEval(expr.literal));

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

    function aggregateToEvalExpr(agg) {

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
}(this))
