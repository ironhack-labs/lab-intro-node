class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) { return a - b; });
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } return (this.items.reduce((a, b) => a + b, 0) / this.items.length);
  }
}

module.exports = SortedList;
