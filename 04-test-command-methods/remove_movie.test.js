const _ = require('lodash');
const Cinema = require("./cinema");

describe("Remove movie", () => {
  test("when the id is there", () => {
    const cinema = new Cinema();

    cinema.addMovie("Coco");
    const movieId = cinema.addMovie("Dumbo");
    expect(cinema.allMovies().length).toBe(2);

    cinema.removeMovie(movieId)

    const movies = cinema.allMovies()
    expect(movies.length).toBe(1);
    expect(_.first(movies).name).toBe("Coco");
  })

  test("when the id is not there", () => {
    const cinema = new Cinema();

    cinema.addMovie("Coco");
    expect(cinema.allMovies().length).toBe(1);

    cinema.removeMovie("Other id")
    expect(cinema.allMovies().length).toBe(1);
  })

  describe("when the id is not given", () => {
    test("it does not remove any movie", () => {
      const cinema = new Cinema();

      cinema.addMovie("Coco");
      expect(cinema.allMovies().length).toBe(1);

      cinema.removeMovie(null)
      expect(cinema.allMovies().length).toBe(1);
    });

    test("returns an error", () => {
      const cinema = new Cinema();

      cinema.addMovie("Coco");
      const error = cinema.removeMovie(null)
      expect(error).toBe("An id is expected");
    });
  })
})
