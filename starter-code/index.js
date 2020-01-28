class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = this.items.reduce(function(accum, value) {
      return accum + value;
    }, 0);
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sum = this.items.reduce(function(accum, value) {
      return accum + value;
    }, 0);
    return sum / this.length;
  }
}

module.exports = SortedList;
