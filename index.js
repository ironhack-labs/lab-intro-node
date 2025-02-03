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
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    const total = this.items.reduce(
      (accumulator, curr) => accumulator + curr,
      0
    );

    return total;
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    const average = this.sum() / this.items.length;
    return average;
  }
}
module.exports = SortedList;
