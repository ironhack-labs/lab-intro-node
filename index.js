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
      throw Error('OutOfBounds')
    }
  }

  max() {
    if (!this.length) {
      throw Error('EmptySortedList')
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (!this.length) {
      throw Error('EmptySortedList')
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length) {
      return this.items.reduce((a, b) => {
        return a += b
      }, 0)
    } else {
      return this.length
    }
  }

  avg() {
    if (!this.length) {
      throw Error('EmptySortedList')
    } else {
      return this.sum(this.items) / this.length
    }
  }
}

module.exports = SortedList;