const Cinema = require("./cinema");

class FakeStore {
  constructor() {
    this.callsToCreate = [];
  }

  create(record) {
    this.callsToCreate.push(record);
  }
}

describe("Add movie", () => {
  describe("with name", () => {
    test("stores the movie", () => {
      const store = new FakeStore();
      const cinema = new Cinema(store);

      cinema.addMovie({name: "Dumbo"});
      expect(store.callsToCreate.length).toBe(1);
      expect(store.callsToCreate).toContainEqual({name: "Dumbo"});
    });
  });

  describe("without name", () => {
    test("is not added", () => {
      const store = new FakeStore();
      const cinema = new Cinema(store);

      cinema.addMovie({name: null});
      expect(store.callsToCreate.length).toBe(0);
    });

    test("returns an error", () => {
      const store = new FakeStore();
      const cinema = new Cinema(store);
      const error = cinema.addMovie({name: null});
      expect(error).toBe("Name can't be blank");
    });
  });
});
