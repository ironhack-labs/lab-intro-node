class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.items.length;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, curr) => acc + curr);
    }
  }
}

var newItem = new SortedList();
module.exports = SortedList;
