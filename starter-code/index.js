class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.length) {
      throw Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length) {
      throw Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (!this.length) return 0;
    return this.items.reduce((acc, curr) => (acc += curr), 0);
  }

  avg() {
    if (!this.length) {
      throw Error("EmptySortedList");
    }
    return (
      this.items.reduce((acc, curr) => (acc += curr), 0) / this.items.length
    );
  }
}

module.exports = SortedList;
