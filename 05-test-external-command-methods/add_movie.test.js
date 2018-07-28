class StoreSpy {
  constructor() {
    this.calls = {
      insert: []
    }
  }

  insert(data) {
    this.calls.insert.push(data);
  }
}

class Cinema {
  constructor(store) {
    this.store = store;
  }

  addMovie(name) {
    if (name) {
      this.store.insert({name: name});
    } else {
      return "Name can't be blank";
    }
  }
}

describe("Add movie", () => {
  test("saves the movie", () => {
    const store = new StoreSpy();
    const cinema = new Cinema(store);
    cinema.addMovie("Coco");
    expect(store.calls.insert.length).toBe(1)
    expect(store.calls.insert).toContainEqual({name: "Coco"})
  });

  describe("without name", () => {
    test("does not call the store", () => {
      const store = new StoreSpy();
      const cinema = new Cinema(store);
      cinema.addMovie(null);
      expect(store.calls.insert.length).toBe(0)
    });

    test("returns an error", () => {
      const store = new StoreSpy();
      const cinema = new Cinema(store);
      const error = cinema.addMovie(null);
      expect(error).toBe("Name can't be blank")
    });
  })
});
