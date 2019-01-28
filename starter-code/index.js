class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length++;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos - 1];
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
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((firstValue, secondValue) => firstValue + secondValue) / this.items.length;
    }
  }
  sum() {
    if (this.items.length === 0 ) {
      return 0;
    } else {
      return this.items.reduce((firstValue, secondValue) => firstValue + secondValue);
    }
  }
};

module.exports = SortedList;
