const {
  findMovie,
  filterMoviesByScore,
  averageScore,
  averagePeopleScore
} = require('./movies');


describe("find movie by id", () => {
  const movies = [
    { id: 1, name: "Coco" },
    { id: 2, name: "Avengers" }
  ];

  test("with id as integer", () => {
    const movie = findMovie(1, movies);
    expect(movie.name).toBe("Coco");
  });

  test("with id as string", () => {
    const movie = findMovie("1", movies);
    expect(movie.name).toBe("Coco");
  });
});

describe("filter movies by score", () => {
  const movies = [
    {score: 4.5, name: "Coco"},
    {score: 3, name: "Avengers"}
  ]

  test("with score as integer", () => {
    const filtered = filterMoviesByScore(3, movies);
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe("Avengers");
  });

  test("with score as string", () => {
    const filtered = filterMoviesByScore("4.5", movies);
    expect(filtered.length).toBe(1);
    expect(filtered[0].name).toBe("Coco");
  })
});

describe("average score for all movies", () => {
  test("without movies", () => {
    const movies = []
    const score = averageScore(movies);
    expect(score).toBe(0);
  });

  test("with a movie", () => {
    const movies = [{score: 4, name: "Coco"}]
    const score = averageScore(movies);
    expect(score).toBe(4);
  });

  test("with two movies", () => {
    const movies = [
      {score: 4, name: "Coco"},
      {score: 3, name: "Avengers"}
    ]

    const score = averageScore(movies);
    expect(score).toBe(3.5);
  });
});

describe("average people score for movie", () => {
  test("movie without peopleScores", () => {
    const movie = {
      name: "Coco",
      peopleScores: null
    }

    expect(averagePeopleScore(movie)).toBe(0);
  });

  test("movie two peopleScores", () => {
    const movie = {
      name: "Coco",
      peopleScores: [3, 4]
    }

    expect(averagePeopleScore(movie)).toBe(3.5);
  });

  test("movie with peopleScores", () => {
    const movie = {
      name: "Coco",
      peopleScores: [3, 3, 4, 4, 5, 5]
    }

    expect(averagePeopleScore(movie)).toBe(4);
  });
});
