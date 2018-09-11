class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    return this.items.length === 0 ? 0 : this.items.reduce((a, c) => a + c)
  }
};

module.exports = SortedList;
