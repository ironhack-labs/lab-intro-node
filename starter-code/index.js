class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length++;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
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
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items);
  }
  average() {}
  sum() {}
};

module.exports = SortedList;
