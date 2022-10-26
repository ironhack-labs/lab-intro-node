class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items = this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.length - 1];
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[0];
  }

  sum() {
    if (this.length == 0) {
      return 0;
    }

    return this.items.reduce((acc, inc) => {
      acc = acc + inc;

      return acc;
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
