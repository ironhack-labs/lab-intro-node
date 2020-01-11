/*jshint esversion: 6 */
class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    }
    return this.items.indexOf(pos);
  }

  max() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc, currVal) => acc + currVal, 0);
  }

  avg() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
