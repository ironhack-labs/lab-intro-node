class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length !== 0) {
      return Math.max(...this.items);
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length !== 0) {
      return Math.min(...this.items);
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0);
    }
  }

  avg() {
    if (this.items.length !== 0) {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
