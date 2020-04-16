class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      return this.items.reduce((acc, value) => acc + value, 0)
    }
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, value) => acc + value, 0) / this.length
    }
  }
}

module.exports = SortedList;
