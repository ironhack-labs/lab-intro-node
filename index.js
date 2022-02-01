class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds')
    }
    return this.items[pos]

  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return this.items[this.length - 1]
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return this.items[0]
  }

  sum() {
    const totalSum = this.items.reduce((u, v) => u + v, 0);
    return totalSum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    const avg = this.sum() / this.length
    return avg;
  }
}

module.exports = SortedList;
const list = new SortedList