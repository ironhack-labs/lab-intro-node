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
    if (this.items[pos] < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length) return this.items[this.length - 1];
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.length) return this.items[0];
    throw new Error("EmptySortedList");
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items.reduce((ac, cu) => ac + cu, 0) / this.length;
  }
}

module.exports = SortedList;
