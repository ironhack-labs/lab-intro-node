class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) return 0;

    const sum = this.items.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw Error("EmptySortedList");
    }
    const sum = this.items.reduce((acc, curr) => acc + curr, 0);
    return sum / this.items.length;
  }
}

module.exports = SortedList;
