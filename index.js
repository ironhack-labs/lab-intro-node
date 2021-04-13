class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (this.items[pos] === undefined) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce(( accumulator, currentValue ) => accumulator + currentValue,
      0
    );
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return this.average = this.sum() / this.items.length
  }
}

module.exports = SortedList;

