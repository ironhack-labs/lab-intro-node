class SortedList {
  constructor() {
    this.items = new Array();
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((a, b) => Math.max(a, b));
    }
  }
  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((a, b) => Math.min(a, b));
    }
  }
  average() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.items.length;
    }
  }
  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }
      return sum;
    }
  }
};


module.exports = SortedList;