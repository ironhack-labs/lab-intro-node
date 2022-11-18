class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => (a > b ? 1 : -1));
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) throw new Error('OutOfBounds');
    else return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) return 0;
    else return this.items.reduce((sum, item) => (sum = sum + item));
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else
      return this.items.reduce((sum, item) => (sum = sum + item)) / this.length;
  }
}

module.exports = SortedList;
