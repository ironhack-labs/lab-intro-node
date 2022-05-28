class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if ((this.length === 0)) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce(function (a, b) {
        return Math.max(a, b);
      });
    }
  }

  min() {
    if ((this.length === 0)) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce(function (a, b) {
        return Math.min(a, b);
      });
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      const reducer = (accumulator, curr) => accumulator + curr;
      return this.items.reduce(reducer);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
