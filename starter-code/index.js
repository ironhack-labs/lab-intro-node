class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) => {
      return Math.max(a, b);
    });
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) => {
      return Math.min(a, b);
    });
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;