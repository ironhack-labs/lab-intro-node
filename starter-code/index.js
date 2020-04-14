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
    if (this.items[pos]) {
      return this.items[pos];
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    // return Math.max(...this.items);
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    // return Math.min(...this.items);
    return this.items[0];
  }

  sum() {
    return this.items.reduce((r, i) => (r += i), 0);
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
