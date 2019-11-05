class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items);

  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items);
  }


  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    this.sum();
    return this.sum / this.length;
  }


  sum() {
    if (this.length === 0) {
      return 0;
    }
    this.sum = this.items.reduce((a, b) => a + b)
    return this.sum;
  }
};

module.exports = SortedList;