class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error("OutOfBounds")
    }

    return this.items[pos]
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }
    return this.items[this.length - 1]
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }

  sum() {
    if (!this.length) {
      return 0
    }
    let sum = this.items.reduce((a, b) => {
      return a + b
    })
    return sum
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList
