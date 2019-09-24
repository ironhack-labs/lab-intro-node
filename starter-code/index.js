class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a > b);
  }
  get(pos) {
    if (this.length === 0) throw new Error("OutOfBounds");
    return this.items[pos];
  }
  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[this.length - 1];
  }
  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }
  average() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items.reduce((acc, item) => acc + item, 0) / this.items.length;
  }
  sum() {
    return this.items.reduce((acc, item) => acc + item, 0);
  }
}

module.exports = SortedList;
