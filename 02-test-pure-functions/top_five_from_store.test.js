const { getTopFiveFromStore } = require("./movies");

class Store {
  constructor(movies) {
    this.movies = movies;
  }

  all() {
    return this.movies
  }
}

describe("Get top five from store", () => {
  const getNames = (movies) => {
    return movies.map((movie) => movie.name)
  }

  test("no movies", () => {
    const store = new Store([]);
    const top = getTopFiveFromStore(store);
    expect(top).toEqual([]);
  });

  test("with a movie", () => {
    const store = new Store([
      { name: "Coco", totalViews: 145 }
    ])

    const top = getTopFiveFromStore(store);
    expect(getNames(top)).toEqual(["Coco"]);
  });

  test("with more than 5 already ordered", () => {
    const store = new Store([
      { name: "Movie1", totalViews: 10 },
      { name: "Movie2", totalViews: 12 },
      { name: "Movie3", totalViews: 13 },
      { name: "Movie4", totalViews: 15 },
      { name: "Movie5", totalViews: 16 },
      { name: "Movie6", totalViews: 17 }
    ])

    const top = getTopFiveFromStore(store);

    expect(getNames(top)).toEqual([
      "Movie6", "Movie5", "Movie4", "Movie3", "Movie2"
    ]);
  });

  test("with more than 5 not ordered", () => {
    const store = new Store([
      { name: "Movie2", totalViews: 12 },
      { name: "Movie1", totalViews: 10 },
      { name: "Movie4", totalViews: 15 },
      { name: "Movie6", totalViews: 17 },
      { name: "Movie5", totalViews: 16 },
      { name: "Movie3", totalViews: 13 }
    ])

    const top = getTopFiveFromStore(store);

    expect(getNames(top)).toEqual([
      "Movie6", "Movie5", "Movie4", "Movie3", "Movie2"
    ]);
  });
});
