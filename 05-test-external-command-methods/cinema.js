class Cinema {
  constructor(store) {
    this.store = store;
  }

  addMovie(movie) {
    if (movie.name) {
      this.store.create(movie);
    } else {
      return "Name can't be blank"
    }
  }

  removeMovie(id) {
    this.store.delete(id);
  }
}

module.exports = Cinema;
