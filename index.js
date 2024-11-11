class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    if (this.items.length > 1) {
      this.items.sort((a, b) => a - b);
    }
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sumArray = this.items.reduce((acc, curr) => acc + curr, 0);
    return sumArray / this.items.length;
  }
}

module.exports = SortedList;
