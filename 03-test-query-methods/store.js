class Store {
  constructor(records) {
    this.records = records;
  }

  all() {
    return this.records;
  }
}

module.exports = Store;
