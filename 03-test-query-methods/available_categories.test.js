const Cinema = require("./cinema");
const Store = require("./store");

describe("Available categories", () => {
  const availableCategoriesFor = (movies) => {
    const cinema = new Cinema(movies);
    return cinema.availableCategories();
  };

  const availableCategoriesFromStore = (movies) => {
    const store = new Store(movies)
    const cinema = Cinema.fromStore(store);
    return cinema.availableCategories();
  };

  test("no movies", () => {
    const movies = [];
    const categories = availableCategoriesFor(movies);
    expect(categories).toEqual([]);
  });

  test("one movie", () => {
    const movies = [{ categories: ["kids"] }]
    const categories = availableCategoriesFor(movies);
    expect(categories).toEqual(["kids"]);
  });

  test("movie without categories", () => {
    const movies = [
      { categories: ["kids"] },
      { categories: null }
    ]

    const categories = availableCategoriesFor(movies);
    expect(categories).toEqual(["kids"]);
  });

  test("sorted alphabetically", () => {
    const movies = [
      { categories: ["kids", "action"] },
    ]

    const categories = availableCategoriesFor(movies);
    expect(categories).toEqual(["action", "kids"]);
  });

  test("categories are not repeated", () => {
    const movies = [
      { categories: ["kids", "action"] },
      { categories: ["kids", "comedy"] },
    ]

    const categories = availableCategoriesFor(movies);
    expect(categories).toEqual(["action", "comedy", "kids"]);
  });

  test("from store", () => {
    const movies = [
      { categories: ["kids", "action"] },
      { categories: ["kids", "comedy"] },
    ]

    const categories = availableCategoriesFromStore(movies);
    expect(categories).toEqual(["action", "comedy", "kids"]);
  });
});
