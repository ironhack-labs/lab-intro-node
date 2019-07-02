class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    this.length = this.items.length;
    if (pos > 0) { return this.items[pos - 1]; }
    if (pos < 1) { throw new Error("OutOfBounds"); }
  }

  max() {
    if (this.length === 0) { throw new Error("EmptySortedList"); }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.length === 0) { throw new Error("EmptySortedList"); }
    return this.items[0];
  }

  average() {
    if (this.length === 0) { throw new Error("EmptySortedList"); }
    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) { return 0; }
    return this.items.reduce((sum, current) => sum + current);
  }

}

module.exports = SortedList;
