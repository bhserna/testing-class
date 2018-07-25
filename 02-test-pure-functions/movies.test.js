const { getTopFive } = require("./movies");

describe("Get top five", () => {
  const getNames = (movies) => {
    return movies.map((movie) => movie.name)
  }

  test("no movies", () => {
    const movies = [];
    const top = getTopFive(movies);
    expect(top).toEqual([]);
  });

  test("with a movies", () => {
    const movies = [
      { name: "Coco", totalViews: 145 }
    ]

    const top = getTopFive(movies);
    expect(getNames(top)).toEqual(["Coco"]);
  });

  test("with more than 5 already ordered", () => {
    const movies = [
      { name: "Movie1", totalViews: 10 },
      { name: "Movie2", totalViews: 12 },
      { name: "Movie3", totalViews: 13 },
      { name: "Movie4", totalViews: 15 },
      { name: "Movie5", totalViews: 16 },
      { name: "Movie6", totalViews: 17 }
    ]

    const top = getTopFive(movies);

    expect(getNames(top)).toEqual([
      "Movie1", "Movie2", "Movie3", "Movie4", "Movie5"
    ]);
  });

  test("with more than 5 not ordered", () => {
    const movies = [
      { name: "Movie2", totalViews: 12 },
      { name: "Movie1", totalViews: 10 },
      { name: "Movie4", totalViews: 15 },
      { name: "Movie6", totalViews: 17 },
      { name: "Movie5", totalViews: 16 },
      { name: "Movie3", totalViews: 13 }
    ]

    const top = getTopFive(movies);

    expect(getNames(top)).toEqual([
      "Movie1", "Movie2", "Movie3", "Movie4", "Movie5"
    ]);
  });
});
