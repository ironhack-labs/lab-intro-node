class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.items[this.length - 1];
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
