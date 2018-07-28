class Cinema {
  constructor() {
    this.movies = [];
  }

  addMovie(name) {
    if (name) {
      const movieId = this.movies.length + 1;
      this.movies.push({id: movieId, name: name})
      return movieId;

    } else {
      return "Name can't be blank"
    }
  }

  removeMovie(movieId) {
    if (movieId) {
      this.movies = this.movies.filter((movie) => movie.id != movieId);
    } else {
      return "An id is expected";
    }
  }

  findMovie(movieId) {
    return this.movies.find((movie) => movie.id === movieId)
  }

  allMovies() {
    return this.movies;
  }
}

module.exports = Cinema;
