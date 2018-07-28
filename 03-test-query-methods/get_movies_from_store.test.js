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
  constructor(store) {
    this.store = store
  }

  getMovies() {
    return _
      .chain(this.store.allRecords())
      .map((record) => new Movie(record))
      .uniqBy("id")
      .value()
  }
}

class Movie {
  constructor(record) {
    this.id = record.id;
    this.name = record.name || "-";
    this.averageScore = computeAverageScore(record.scores);
  }
}

class FakeStore {
  constructor(records) {
    this.records = records;
  }

  allRecords() {
    return this.records;
  }
}

describe("Get movies", () => {
  const getMovies = (data) => {
    const cinema = new Cinema(new FakeStore(data));
    return cinema.getMovies();
  }

  test("returns all movies", () => {
    const data = [{id: 1}, {id: 2}];
    const movies = getMovies(data);
    expect(movies.length).toBe(2);
  });

  describe("each movie", () => {
    test("has an id", () => {
      const data = [{id: 1234}];
      const movie = _.first(getMovies(data));
      expect(movie.id).toBe(1234);
    });

    describe("has a name", () => {
      test("when the record has a name", () => {
        const data = [{name: "Coco"}];
        const movie = _.first(getMovies(data));
        expect(movie.name).toBe("Coco");
      });

      test("when the record does not have a name", () => {
        const data = [{name: null}];
        const movie = _.first(getMovies(data));
        expect(movie.name).toBe("-");
      });
    });

    describe("has an average score", () => {
      test("without scores", () => {
        const data = [{scores: []}];
        const movie = _.first(getMovies(data));
        expect(movie.averageScore).toBe("-");
      });

      test("without scores property", () => {
        const data = [{scores: null}];
        const movie = _.first(getMovies(data));
        expect(movie.averageScore).toBe("-");
      });

      test("with an score", () => {
        const data = [{scores: [4]}];
        const movie = _.first(getMovies(data));
        expect(movie.averageScore).toBe(4);
      });

      test("with some scores", () => {
        const data = [{scores: [2, 3, 4]}];
        const movie = _.first(getMovies(data));
        expect(movie.averageScore).toBe(3);
      });
    });

    test("is unique", () => {
      const data = [{id: 1234}, {id: 1234}, {id: 2345}];
      const [first, second] = getMovies(data);
      expect(first.id).toBe(1234);
      expect(second.id).toBe(2345);
    });
  });
});
