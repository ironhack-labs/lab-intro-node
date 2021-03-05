class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) throw new Error('OutOfBounds')

    return this.items[pos]
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList')
    const pos = this.length - 1;
    return this.items[pos]
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList')
    return this.items[0]
  }

  sum() {
    if (this.length === 0) return this.length;

    const sum = this.items.reduce((acc, item) => {
      return acc += item
    })
    return sum;
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    const sum = this.items.reduce((acc, item) => {
      return acc += item
    })
    return sum / this.length;
  }
}

module.exports = SortedList;
