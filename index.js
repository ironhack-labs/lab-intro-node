class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0)
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
