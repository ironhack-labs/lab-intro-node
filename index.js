class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    }
    return Math.max(...this.items)
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0)
  }

  avg() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList;