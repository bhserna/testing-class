const { getTopFiveForCountry } = require("./movies");

describe("Get top five", () => {
  const getNames = (movies) => {
    return movies.map((movie) => movie.name)
  }

  test("no movies", () => {
    const movies = [];
    const top = getTopFiveForCountry("México", movies);
    expect(top).toEqual([]);
  });

  test("with a movie without the expected country", () => {
    movies = [{
      name: "Coco",
      views: [{country: "Canada"}]
    }]

    const top = getTopFiveForCountry("México", movies);
    expect(getNames(top)).toEqual([]);
  });

  test("with a movie with the expected country", () => {
    movies = [{
      name: "Coco",
      views: [{country: "México"}]
    }]

    const top = getTopFiveForCountry("México", movies);
    expect(getNames(top)).toEqual(["Coco"]);
  });

  test("a top two", () => {
    movies = [
      {
        name: "Top2",
        views: [{country: "México"}]
      },
      {
        name: "Top1",
        views: [
          {country: "México"},
          {country: "México"}
        ]
      },
    ]

    const top = getTopFiveForCountry("México", movies);
    expect(getNames(top)).toEqual(["Top1", "Top2"]);
  });

  test("with more than 5", () => {
    movies = [
      {
        name: "Top2",
        views: [
          {country: "México"},
          {country: "Canada"},
          {country: "México"},
          {country: "México"},
          {country: "México"},
          {country: "México"}
        ]
      },
      {
        name: "Top1",
        views: [
          {country: "México"},
          {country: "Canada"},
          {country: "México"},
          {country: "México"},
          {country: "México"},
          {country: "México"},
          {country: "México"}
        ]
      },
      {
        name: "Top3",
        views: [
          {country: "México"},
          {country: "Canada"},
          {country: "México"},
          {country: "México"},
          {country: "México"}
        ]
      },
      {
        name: "Top4",
        views: [
          {country: "México"},
          {country: "México"},
          {country: "Canada"},
          {country: "México"}
        ]
      },
      {
        name: "Top5",
        views: [
          {country: "México"},
          {country: "México"},
          {country: "Canada"}
        ]
      },
      {
        name: "Top6",
        views: [
          {country: "Canada"},
          {country: "México"}
        ]
      }
    ]

    const top = getTopFiveForCountry("México", movies);
    expect(getNames(top)).toEqual([
      "Top1", "Top2", "Top3", "Top4", "Top5"
    ]);
  });
});
