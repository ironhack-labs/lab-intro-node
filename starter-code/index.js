class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(items) {
    this.items.push(items);
    this.length = this.items.length;
  }

  get(pos) {
    this.items.sort((a, b) => a - b);
    return this.items[pos - 1];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  average() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.items.length;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }
}

module.exports = SortedList;
