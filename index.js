class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length) return this.items.sort((a, b) => b - a)[0];

    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length) return this.items.sort((a, b) => a - b)[0];

    throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length) return this.sum() / this.items.length;

    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
