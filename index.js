class SortedList {
  constructor() {
    this.items = [];
    this.length = "";
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    let max = this.items.reduce((a, b) => Math.max(a, b));
    if (typeof max === "number") {
      return max;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (!this.items) {
      return new Error("EmptySortedList");
    }
    let min = Math.min(...this.items);
    if (typeof min === "number") {
      return min;
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }

  avg() {
    if (!this.items) {
      new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) => a + b) / this.items.length;
  }
}

module.exports = SortedList;
