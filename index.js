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
    if (pos > this.items.length) throw new Error("Out of bounds");
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const reducer = (acc, curr) => acc + curr;
      return this.items.reduce(reducer);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
