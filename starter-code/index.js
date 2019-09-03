class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos >= this.items.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items[this.items.length - 1];
  }
  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }
  average() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.items.length;
  }
  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce((acc, value) => acc + value, 0);
  }
};

module.exports = SortedList;