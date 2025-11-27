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
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((totalSum, number) => {
      return totalSum + number;
    }, 0)
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((totalAverage, number, index, array) =>{
      return totalAverage + (number / array.length);
    }, 0)
  }
}

module.exports = SortedList;
