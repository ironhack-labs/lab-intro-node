class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add = item => {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  };

  get = pos => {
    if (pos > this.length - 1) throw Error("OutOfBounds");
    else return this.items[pos];
  };

  max() {
    if (this.length) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
