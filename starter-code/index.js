class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort((a, b) => b - a);
    return this.items[0];
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort((a, b) => a - b);
    return this.items[0];
  }

  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    let sum = this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / this.items.length;
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    }
    let sum = this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum;
  }
}

module.exports = SortedList;
