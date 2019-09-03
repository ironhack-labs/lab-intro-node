class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos > this.items.length - 1 || pos < 0) throw new Error("OutOfBounds");
    else return this.items[pos];
  }
  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }
  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    else return this.items[0];
  }
  average() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    else return this.sum() / this.items.length;
  }
  sum() {
    return this.items.reduce((acc, i) => acc + i, 0);
  }
}

module.exports = SortedList;
