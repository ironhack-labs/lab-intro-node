class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
    // this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      this.items.sort((a, b) => b - a);
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((acc, el) => acc + el, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      const sum = this.items.reduce((acc, el) => acc + el, 0);
      return sum / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
