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
    if (!this.items.length == 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (!this.items.length == 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      let suma = (a, b) => a + b;
      return this.items.reduce(suma);
    }
  }
}

module.exports = SortedList;
