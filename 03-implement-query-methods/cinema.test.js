//const Cinema = require('./cinema');

//test("find the most popular movie", () => {
  //const movies = [{ name: "Coco", views: 1234 }, { name: "Avengers", views: 94 }]
  //const cinema = new Cinema(movies)
  //const movie = cinema.mostPopularMovie();
  //expect(movie.name).toBe("Coco");
//});

//test("filter movies by score", () => {
  //const movies = [{score: 4.5, name: "Coco"}, {score: 3, name: "Avengers" }]
  //const cinema = new Cinema(movies)
  //const filtered = cinema.filterMoviesByScore(3);
  //expect(filtered.length).toBe(1);
  //expect(filtered[0].name).toBe("Avengers");
//});

//describe("available schedules", () => {
  //test("no movies", () => {
    //const movies = []
    //const cinema = new Cinema(movies)
    //expect(cinema.availableSchedules()).toEqual([]);
  //});

  //test("one movie", () => {
    //const movies = [{schedule: ["4pm"]}]
    //const cinema = new Cinema(movies)
    //expect(cinema.availableSchedules()).toEqual(["4pm"]);
  //});

  //test("two movies", () => {
    //const movies = [{schedule: ["4pm"]}, {schedule: ["5pm"]}]
    //const cinema = new Cinema(movies)
    //expect(cinema.availableSchedules()).toEqual(["4pm", "5pm"]);
  //});

  //test("mixed times", () => {
    //const movies = [{schedule: ["4pm", "6pm"]}, {schedule: ["5pm", "6pm", "8pm"]}]
    //const cinema = new Cinema(movies)
    //expect(cinema.availableSchedules()).toEqual(["4pm", "5pm", "6pm", "8pm"]);
  //});
//});

//describe("movie available schedules", () => {
  //test("one time" () => {
    //const movies = [{id: 2, schedule: ["4pm"]}]
    //const cinema = new Cinema(movies)
    //const movie = cinema.findById(2)
    //expect(movie.availableSchedules()).toEqual(["4pm"]);
  //});

  //test("two movies", () => {
    //const movies = [{id: 1, schedule: ["4pm"]}, {id: 2, schedule: ["5pm"]}]
    //const cinema = new Cinema(movies)
    //const movie = cinema.findById(2)
    //expect(movie.availableSchedules()).toEqual(["5pm"]);
  //});

  //test("mixed times", () => {
    //const movies = [{schedule: ["4pm", "6pm"]}, {schedule: ["5pm", "6pm", "8pm"]}]
    //const cinema = new Cinema(movies)
    //const movie = cinema.findById(1)
    //expect(movie.availableSchedules()).toEqual(["4pm", "6pm"]);
  //});
//});

//describe("average people score for movie", () => {
  //test("movie with peopleScores", () => {
    //const movies = [{
      //id: 1,
      //name: "Coco",
      //peopleScores: [3, 3, 4, 4, 5, 5]
    //}]

    //const cinema = new Cinema(movies)
    //const movie = cinema.findById(1)
    //expect(movie.averagePeopleScore()).toBe(4);
  //});

  //test("movie without peopleScores", () => {
    //const movies = [{
      //id: 1,
      //name: "Coco",
      //peopleScores: null
    //}]

    //const cinema = new Cinema(movies)
    //const movie = cinema.findById(1)
    //expect(movie.averagePeopleScore()).toBe(0);
  //});
//});
