const Cinema = require("./cinema");

describe("Add movie", () => {
  describe("saves the movie", () => {
    test("first movie", () => {
      const cinema = new Cinema()
      const movieId = cinema.addMovie("Dumbo");
      const movie = cinema.findMovie(movieId);
      expect(movie.name).toBe("Dumbo");
    });

    test("two movies", () => {
      const cinema = new Cinema()
      cinema.addMovie("Dumbo");
      const movieId = cinema.addMovie("Coco");
      const movie = cinema.findMovie(movieId);
      expect(movie.name).toBe("Coco");
    });
  });

  describe("without name", () => {
    test("returns an error", () => {
      const cinema = new Cinema()
      const error = cinema.addMovie(null);
      expect(error).toBe("Name can't be blank");
    });

    test("does not save the movie", () => {
      const cinema = new Cinema()
      cinema.addMovie(null);
      expect(cinema.allMovies().length).toBe(0);
    });
  });
});
