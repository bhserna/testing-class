const _ = require("lodash");

class Cinema {
  constructor(records) {
    this.movies = _.map(records, (record) => new Movie(record));
  }

  static fromStore(store) {
    return new Cinema(store.all());
  }

  getMovies() {
    return this.movies;
  }

  availableCategories() {
    return _
      .chain(this.movies)
      .flatMap((movie) => movie.categories)
      .uniq()
      .sort()
      .value()
  }
}

class Movie {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.averageScore = _.mean(data.scores);
    this.categories = data.categories || [];
  }
}

module.exports = Cinema;
