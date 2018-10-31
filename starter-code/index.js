class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    //this.length === 0 ? throw new Error("EmptySortedList") : return Math.min(...this.items);
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.length;
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }
};

module.exports = SortedList;
