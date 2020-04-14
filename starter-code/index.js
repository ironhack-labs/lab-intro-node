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
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items); //prevents NaN and returns highest also with programmatically created arrays like in this lab
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items); // spread operator, see max() above
  }

  sum() {
    if (this.length == 0) {
      return 0;
    }
    return this.items.reduce((acc, val) => {
      return acc + val;
    }, 0);
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
