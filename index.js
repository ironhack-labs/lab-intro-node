class SortedList {
  constructor(items, length) {
    this.items = items
    this.length = length

    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.max.apply(Math, this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.min.apply(Math, this.items)
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((acc, curr) => acc + curr)
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((acc, curr) => acc + curr) / this.length
    }
  }
}

module.exports = SortedList;
