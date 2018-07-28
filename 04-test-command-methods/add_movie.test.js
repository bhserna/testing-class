const Cinema = require("./cinema");
const _ = require('lodash');

describe("Add movie", () => {
  describe("with name", () => {
    test("stores the movie", () => {
      const cinema = new Cinema();
      cinema.addMovie({name: "Dumbo"});

      const movie = _.first(cinema.getMovies());
      expect(movie.name).toBe("Dumbo");
    });

    describe("generates a consecutive id", () => {
      test("first movie", () => {
        const cinema = new Cinema();
        cinema.addMovie({name: "Dumbo"});

        const movie = _.first(cinema.getMovies());
        expect(movie.id).toBe(1);
      });

      test("second movie", () => {
        const cinema = new Cinema();
        cinema.addMovie({name: "Dumbo"});
        cinema.addMovie({name: "Coco"});

        const movie = _.last(cinema.getMovies());
        expect(movie.id).toBe(2);
        expect(movie.name).toBe("Coco");
      });
    });
  });

  describe("without name", () => {
    test("is not added", () => {
      const cinema = new Cinema();
      cinema.addMovie({name: null});

      const movies = cinema.getMovies();
      expect(movies.length).toBe(0);
    });

    test("returns an error", () => {
      const cinema = new Cinema();
      const error = cinema.addMovie({name: null});
      expect(error).toBe("Name can't be blank");
    });
  });
});
