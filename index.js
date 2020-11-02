class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    return this.items = this.items.sort(function (a, b) {
      return a - b
    })
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    let descending = this.items.sort(function (a, b) {
      return b - a
    })
    return descending[0]
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    if (!this.items.length) {
      return 0
    }
    return this.items.reduce(function (a, b) {
      return a + b
    })
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.items.length
  }
}

module.exports = SortedList;