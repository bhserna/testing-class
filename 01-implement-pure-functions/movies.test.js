const {
  findMovie,
  filterMoviesByScore,
  averageScore,
  averagePeopleScore
} = require('./movies');

test("find movie by id", () => {
  const movies = [{ id: 1, name: "Coco" }, { id: 2, name: "Avengers" }]
  const movie = findMovie(1, movies);
  expect(movie.name).toBe("Coco");
});

//test("filter movies by score", () => {
  //const movies = [{score: 4.5, name: "Coco"}, {score: 3, name: "Avengers" }]
  //const filtered = filterMoviesByScore(3, movies);
  //expect(filtered.length).toBe(1);
  //expect(filtered[0].name).toBe("Avengers");
//});

//test("average score for all movies", () => {
  //const movies = [{score: 4, name: "Coco"}, {score: 3, name: "Avengers" }]
  //const score = averageScore(movies);
  //expect(score).toBe(3.5);
//});

//describe("average people score for movie", () => {
  //test("movie with peopleScores", () => {
    //const movie = {
      //name: "Coco",
      //peopleScores: [3, 3, 4, 4, 5, 5]
    //}

    //expect(averagePeopleScore(movie)).toBe(4);
  //});

  //test("movie without peopleScores", () => {
    //const movie = {
      //name: "Coco",
      //peopleScores: null
    //}

    //expect(averagePeopleScore(movie)).toBe(0);
  //});
//});
