class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.items.length) {
      return this.items[this.length - 1]
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if (this.items.length) {
      return this.items[0]
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    return this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
  }

  avg() {
    if (this.length) {
      return this.sum() / this.length
    } else {
      throw new Error('EmptySortedList')
    }

  }
}

module.exports = SortedList;