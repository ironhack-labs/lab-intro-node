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
    if (this.items[pos]) return this.items[pos];
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.length) return this.items.pop();
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.length) return this.items.shift();
    throw new Error("EmptySortedList");
  }

  sum() {
    if (this.length) return this.items.reduce((a, b) => a + b);
    return 0;
  }

  avg() {
    if (this.length) return this.sum() / this.length;
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
