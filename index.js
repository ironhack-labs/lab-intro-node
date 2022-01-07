class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() {
    if (!this.length) {
      return 0;
    }
    return this.items.reduce((sum, a) => sum + a)
  }

  avg() {
    if (!this.length) {
      return EmptySortedList;
    }
    return this.items.reduce((sum, a) => sum + a) / this.length
  }
}

module.exports = SortedList;