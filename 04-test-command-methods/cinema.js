const _ = require('lodash');

module.exports = class Cinema {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    if (movie.name) {
      movie.id = this.movies.length + 1;
      this.movies.push(movie);
    } else {
      return "Name can't be blank"
    }
  }

  removeMovie(movieId) {
    this.movies = _.reject(this.movies, (movie) => movie.id === movieId)
  }

  addScore(movieId, score) {
    const movie = _.find(this.movies, (movie) => movie.id === movieId);
    movie.score = score;
  }

  getMovies() {
    return this.movies;
  }
}
