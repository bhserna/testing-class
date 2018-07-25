const { getTopFive } = require("./movies");

describe("Get top five", () => {
  test("no movies", () => {
    const movies = [];
    const top = getTopFive(movies);
    expect(top).toEqual([]);
  });
});
