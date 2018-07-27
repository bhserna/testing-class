const _ = require("lodash");
const Cinema = require("./cinema");

describe("Get movies", () => {
  const getMovies = (data) => {
    const cinema = new Cinema(data);
    return cinema.getMovies();
  };

  test("returns all movies", () => {
    const data = [{ id: 1234 }, { id: 3453 }];
    const movies = getMovies(data);
    expect(movies.length).toBe(2);
  });

  describe("each movie", () => {
    test("has an id", () => {
      const data = [{ id: 1234 }];
      const movie = _.first(getMovies(data));
      expect(movie.id).toBe(1234);
    });

    test("has a name", () => {
      const data = [{ name: "Coco" }];
      const movie = _.first(getMovies(data));
      expect(movie.name).toBe("Coco");
    });

    test("has the average score", () => {
      const data = [{ scores: [4, 5, 3] }]
      const movie = _.first(getMovies(data));
      expect(movie.averageScore).toBe(4);
    });
  });
});
