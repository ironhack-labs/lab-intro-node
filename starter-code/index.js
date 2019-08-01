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
    return this.items[pos]
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((total, currentNum) => total + currentNum) / this.items.length
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce((total, currentNum) => total + currentNum)
    }
  }

};

module.exports = SortedList;