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
    if (pos > this.items.length - 1) throw new Error("OutOfBounds");
    return this.items.at(pos);
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.items.at(-1);
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.items.at(0);
  }

  sum() {
    if (!this.items.length) return 0;
    return this.items.reduce((acc, item) => acc + item);
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
