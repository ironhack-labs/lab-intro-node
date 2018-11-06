class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items.slice(-1);
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items[0];
  }

  average() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return (this.sum() / this.length);
  }

  sum() {
    if (this.length === 0) return 0;
    const sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }
}

module.exports = SortedList;
