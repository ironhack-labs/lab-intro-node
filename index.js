class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0);
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
}

module.exports = SortedList;
