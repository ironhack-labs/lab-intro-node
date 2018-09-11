class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
    return  Math.max(...this.items);
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
    return  Math.min(...this.items);
    }
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    return this.length == 0 ? 0 : this.items.reduce((a, b) => a + b, 0);
  }
};

module.exports = SortedList;
