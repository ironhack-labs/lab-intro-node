class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    this.items[pos]
    if (this.length >= pos) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }
    return this.items[this.length - 1]
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    }
    return this.items[0]
  }

  sum() {
    return this.items.reduce((acc, cv) => acc + cv, 0)
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    }
    return (this.sum() / this.length)
  }
}

module.exports = SortedList;
