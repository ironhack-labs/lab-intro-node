class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }
  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }
  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }
  average() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((acc, value) => acc + value) / this.length;
  }
  sum() {
    if (!this.length) {
      return 0;
    }
    return this.items.reduce((acc, value) => acc + value);
  }
}

module.exports = SortedList;
