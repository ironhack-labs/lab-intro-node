class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }

  get(pos) {
    if (pos < this.items.length && pos > -1) { return this.items[pos] }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1]
    }
    throw new Error('EmptySortedList');
  }

  min() {
    if (this.length > 0) {
      return this.items[0]
    }
    throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.reduce((a, v) => a + v, 0)
  }

  avg() {
    if (this.length !== 0) {
      return this.items.reduce((a, v) => a + v, 0) / this.length
    }
    throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;

