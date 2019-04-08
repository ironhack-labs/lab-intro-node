class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  };

  add(x) {
    this.items.push(x);
    this.items.sort((a,b) => a > b);
    this.length = this.items.length;
  };

  get(pos) {
    return this.items[pos - 1];
  };

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((a,b) => a + b);
    }
  }
  average() {
    if (this.items.length === 0) {
    throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.items.length;
    }
  }
};



module.exports = SortedList;
