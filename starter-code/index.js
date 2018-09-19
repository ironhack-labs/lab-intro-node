class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
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
    return this.items[this.items.length - 1];
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((acum, num) => acum + num);
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
