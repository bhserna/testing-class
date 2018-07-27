const _ = require("lodash");

module.exports = {
  getTopFive(movies) {
    return _
      .chain(movies)
      .sortBy("totalViews")
      .reverse()
      .slice(0, 5)
      .value();
  },

  getTopFiveFromStore(store) {
    return _
      .chain(store.all())
      .sortBy("totalViews")
      .reverse()
      .slice(0, 5)
      .value();
  },

  getTopFiveForCountry(country, movies) {
    const isForCountry = (view) => view.country === country;

    return _
      .chain(movies)
      .filter((movie) => _.some(movie.views, isForCountry))
      .sortBy((movie) => _.filter(movie.views, isForCountry).length)
      .reverse()
      .slice(0, 5)
      .value();
  }
}
