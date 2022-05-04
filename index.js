class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length += 1;
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else if (this.items[pos]) {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
