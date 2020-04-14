class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.length++
    this.items.push(item)
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos <= this.items.length - 1) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items)
    } else {
      throw new Error("EmptySortedList")
    }
  }

  min() {
    if (this.length > 0) {
      return Math.min(...this.items)
    } else {
      throw new Error("EmptySortedList")
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((acc, elm) => acc + elm, 0)
    } else {
      return 0
    }
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length
    } else {
      throw new Error("EmptySortedList")
    }
  }
}

module.exports = SortedList;