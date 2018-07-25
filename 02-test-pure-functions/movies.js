const _ = require("lodash");

module.exports = {
  getTopFive(movies) {
    return _.sortBy(movies, "totalViews").slice(0, 5);
  }
}
