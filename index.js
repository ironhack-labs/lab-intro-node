class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos) !== -1) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length < 1) {
      return 0;
    } else {
      return this.items.reduce((a, b) => {
        return a + b;
      });
    }
  }

  avg() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}
//
module.exports = SortedList;
