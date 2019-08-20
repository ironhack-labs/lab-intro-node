class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items = this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((pv, cv) => pv + cv, 0);
    }
  }
}

module.exports = SortedList;
