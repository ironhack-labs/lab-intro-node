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
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    let maxValue = 0;
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => b - a);
      return this.items[0];
    }
    return maxValue;
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    if (this.items.length <= 0) {
      return 0;
    } else {
      this.items.forEach((value) => (sum += value));
      return sum;
    }
  }

  avg() {
    let sum = 0;
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach((value) => (sum += value));
      return sum / this.items.length;
    }
  }
}
module.exports = SortedList;
