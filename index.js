class SortedList {
  constructor() {}
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {}
  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)
    this.length = this.items.length
  }

  get(pos) {}
  get(pos) {
    if (pos > this.length) {
      throw new Error ('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {}
  max() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList')
    }
    return Math.max(...this.items)
  }

  min() {}
  min() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {}
  sum() {
    if (this.length === 0) {
      return 0
    }
    return this.items.reduce(function(previous, current) {
      return previous + current
    })
  }

  avg() {}
  avg() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList')
    }
    return this.sum()/this.length
  }
}

module.exports = SortedList;