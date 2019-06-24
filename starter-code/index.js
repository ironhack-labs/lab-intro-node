class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (!this.length == 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (!this.length == 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (!this.length == 0) {
      let suma = (a, b) => a + b;
      return this.items.reduce(suma);
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
