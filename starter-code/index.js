class SortedList {
  constructor() {
    (this.items = []), (this.length = this.items.length);
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => (a > b ? 1 : -1));
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sortedArr = this.items.sort((a, b) => (a > b ? -1 : 1));
    return sortedArr[0];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sortedArr = this.items.sort((a, b) => (a > b ? 1 : -1));
    return sortedArr[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    let summedNums = this.items.reduce((total, acc) => total + acc);
    return summedNums;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let avgNums = this.sum() / this.length;
    return avgNums;
  }
}

module.exports = SortedList;
