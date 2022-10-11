class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (item) this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
