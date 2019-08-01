class SortedList {

  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      // return this.items[this.length - 1]
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
    return this.items.reduce((total, currentNum) => total + currentNum) / this.items.length
  }

  sum() {
    return this.items.reduce((total, currentNum) => total + currentNum)
  }

};

module.exports = SortedList;