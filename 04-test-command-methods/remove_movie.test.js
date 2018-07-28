const Cinema = require("./cinema");
const _ = require('lodash');

test("Remove movie", () => {
  const cinema = new Cinema();
  cinema.addMovie({name: "Dumbo"});
  const movie = _.first(cinema.getMovies());

  cinema.removeMovie(movie.id);
  expect(cinema.getMovies()).toEqual([]);
});
