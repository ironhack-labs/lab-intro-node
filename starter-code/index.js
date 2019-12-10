class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      alert("OutOfBounds");
    } else return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.items.reduce((a, b) => Math.max(a, b));
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.items.reduce((a, b) => Math.min(a, b));
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else return this.items.reduce((acc, currentValue) => acc + currentValue);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.items.reduce((acc, currentValue) => acc + currentValue) / this.items.length;
  }
}

module.exports = SortedList;
