class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
}

module.exports = SortedList;
