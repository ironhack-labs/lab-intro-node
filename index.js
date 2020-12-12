class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (typeof this.items[pos] !== 'undefined') return this.items[pos];
    throw new Error('OutOfBounds');
  }

  max() {
    return this.items.reduce((a, b) => Math.max(a, b));
  }

  min() {
    return this.items.reduce((a, b) => Math.min(a, b));
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length > 0) return this.items.reduce((a, b) => a + b / this.items.length, 0);
    throw Error('EmptySortedList');
  }
}

module.exports = SortedList;
