class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

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

  sum() {
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  avg() {
    if (this.length) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}
module.exports = SortedList;
