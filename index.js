class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items.indexOf(pos)
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

  sum() {
    if (this.items.length === 0) {
      return 0
    }
    const reducer = (acc, val) => acc + val;
    return this.items.reduce(reducer);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    const arrayAvg = this.items.reduce((acc, val) => acc + val, 0) / this.length;
    return arrayAvg;
  }
}

module.exports = SortedList;