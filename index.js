class SortedList {
  constructor() {
    //roda só uma vez
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos !== this.items[pos]) {
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
    let array = this.items;
    let sum = array.reduce((a, b) => a + b, 0); //a = accumulator acc, b = current value cv
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let array = this.items;
    let avg = array.reduce((a, b) => a + b, 0) / array.length;
    return avg;
  }
}
module.exports = SortedList;
