(function (global) {
  global.QueryIR.prototype.runSemanticAnalysis = function () {
    return getFirstError([
      convertGroupByWithoutAggregratesToUniq,
      cannotSelectStarWithAggregate,
      aggregatesImplyGroupBy,
      onlyCountAggregateTakesStarArgument
    ], this);
  }

  function getFirstError(functions, query) {
    return _.chain(functions)
      .map(function (fn) { return fn.call(query); })
      .filter(function (err) { return err; }).value()[0];
  }

  function convertGroupByWithoutAggregratesToUniq() {
    if (this.groupby.length > 0 && this.aggregates.length == 0) {
      this.groupby = [];
      this.distinct = true;
    }
  }

  function cannotSelectStarWithAggregate() {
    if (this.aggregates.length > 0 && this.projectAll) {
      return "Aggregate functions are not supported in combination with `SELECT *`"
    }
  }

  function aggregatesImplyGroupBy() {
    // If there is an aggregate, we must have some grouping (used to generate the stats command).
    // If the user does not supply the groupings, define them based on the projection.
    if (this.aggregates.length > 0 && this.groupby.length == 0) {
      // Note: Only field names are pushed into projections
      this.groupby = this.projection;
    }
  }

  function onlyCountAggregateTakesStarArgument() {
    var violated = false;
    this.aggregates.forEach(function (agg) {
      if (agg.field == '*') {
        agg.alias = agg.fn;
        violated = violated || agg.fn != 'count';
      }
    });

    if (violated) {
      return "Only the `count` function can take the * argument"
    }
  }

  function resolveFieldName (field) {
    if (self.this.aliases[field]) {
      return self.this.aliases[field];
    }
    return field;
  }
}(this));
