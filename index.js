class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let i = 0;
    while (i < this.length && item > this.items[i]) {
      i++;
    }
    this.items.splice(i, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos > 0 && pos < this.length) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
