class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) return this.items[pos];
    else throw new Error('OutOfBounds');
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList')
    else return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList')
    else return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList')
    else return (this.sum() / this.length);
  }
}

module.exports = SortedList;
