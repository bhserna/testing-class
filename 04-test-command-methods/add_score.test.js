const Cinema = require("./cinema");
const _ = require('lodash');

test("Add score movie", () => {
  const cinema = new Cinema();
  cinema.addMovie({name: "Dumbo"});

  let movie = _.first(cinema.getMovies());
  expect(movie.score).toBeUndefined();

  cinema.addScore(movie.id, 4.5);
  movie = _.first(cinema.getMovies());
  expect(movie.score).toBe(4.5);
});
