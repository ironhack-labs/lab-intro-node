class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a,b) => a - b);
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    return this.length === 0 ? 0 : this.items.reduce((sum, e) => sum + e, 0);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return Math.floor(this.sum() / this.length);
  }
}

module.exports = SortedList;
