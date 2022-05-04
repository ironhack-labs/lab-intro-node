class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.sort();
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === null) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
