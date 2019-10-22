class SortedList {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos > this.length) throw new Error("OutOfBounds");
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
    return this.sum() / this.length
  }
  sum() {
    if (this.length > 0) return this.items.reduce((acc, val) => acc + val);

    return this.length;
  }
}

module.exports = SortedList;