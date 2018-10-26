module.exports = {
  findMovie(id, movies) {
    return movies.find((movie) => {
      return movie.id.toString() === id.toString()
    })
  },

  filterMoviesByScore(score, movies) {
    return movies.filter((movie) => {
      return movie.score.toString() === score.toString()
    })
  },

  averageScore(movies) {
    return movies.reduce((acc, movie) => {
      return acc + movie.score / movies.length;
    }, 0)
  },

  averagePeopleScore(movie) {
    const scores = movie.peopleScores;

    if (!scores)
      return 0;

    return scores.reduce((acc, score) => {
      return acc + score / scores.length;
    }, 0)
  }
}
