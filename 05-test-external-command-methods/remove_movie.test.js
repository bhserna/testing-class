const Cinema = require("./cinema");

class FakeStore {
  constructor() {
    this.calls = {
      delete: []
    };
  }

  delete(id) {
    this.calls.delete.push(id)
  }
}

test("Remove movie", () => {
  const store = new FakeStore();
  const cinema = new Cinema(store);
  const movieId = 1234;

  cinema.removeMovie(movieId);
  expect(store.calls.delete.length).toBe(1)
  expect(store.calls.delete).toContain(movieId)
});

