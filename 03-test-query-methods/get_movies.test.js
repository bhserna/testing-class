const _ = require("lodash");

const computeAverageScore = (scores) => {
  if (!scores || !scores.length) {
    return "-";

  } else {
    return (scores || []).reduce((acc, score) => {
      return acc + score / scores.length
    }, 0)
  }
};

class Cinema {
  constructor(records) {
    this.movies = records.map((record) => new Movie(record));
  }

  getMovies() {
    const movies = {};

    this.movies.forEach((movie) => {
      movies[movie.id] = movie;
    });

    return _.values(movies);
  }
}

class Movie {
  constructor(record) {
    this.id = record.id;
    this.name = record.name || "-";
    this.averageScore = computeAverageScore(record.scores);
  }
}

describe("Get movies", () => {
  test("returns all movies", () => {
    const data = [{id: 1}, {id: 2}];
    const cinema = new Cinema(data);
    const movies = cinema.getMovies();
    expect(movies.length).toBe(2);
  });

  describe("each movie", () => {
    test("has an id", () => {
      const data = [{id: 1234}];
      const cinema = new Cinema(data);
      const movie = _.first(cinema.getMovies());
      expect(movie.id).toBe(1234);
    });

    describe("has a name", () => {
      test("when the record has a name", () => {
        const data = [{name: "Coco"}];
        const cinema = new Cinema(data);
        const movie = _.first(cinema.getMovies());
        expect(movie.name).toBe("Coco");
      });

      test("when the record does not have a name", () => {
        const data = [{name: null}];
        const cinema = new Cinema(data);
        const movie = _.first(cinema.getMovies());
        expect(movie.name).toBe("-");
      });
    });

    describe("has an average score", () => {
      test("without scores", () => {
        const data = [{scores: []}];
        const cinema = new Cinema(data);
        const movie = _.first(cinema.getMovies());
        expect(movie.averageScore).toBe("-");
      });

      test("without scores property", () => {
        const data = [{scores: null}];
        const cinema = new Cinema(data);
        const movie = _.first(cinema.getMovies());
        expect(movie.averageScore).toBe("-");
      });

      test("with an score", () => {
        const data = [{scores: [4]}];
        const cinema = new Cinema(data);
        const movie = _.first(cinema.getMovies());
        expect(movie.averageScore).toBe(4);
      });

      test("with some scores", () => {
        const data = [{scores: [2, 3, 4]}];
        const cinema = new Cinema(data);
        const movie = _.first(cinema.getMovies());
        expect(movie.averageScore).toBe(3);
      });
    });

    test("is unique", () => {
      const data = [{id: 1234}, {id: 1234}, {id: 2345}];
      const cinema = new Cinema(data);
      const [first, second] = cinema.getMovies();
      expect(first.id).toBe(1234);
      expect(second.id).toBe(2345);
    });
  });
});
