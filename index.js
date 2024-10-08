class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.length) {
      return Math.max(...this.items);
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.length) {
      return Math.min(...this.items);
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length)
      return this.items.reduce((acc, curr) => acc + curr, 0) / this.length;
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
