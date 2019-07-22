class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }
  get(pos) {
    if (pos - 1 > this.items.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos - 1]
    }
  }
  max() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }
  average() {
    if (this.items.length < 1) {
      throw new Error("EmptySortedList")
    } else {
      return (this.items.reduce((acc, elm) => acc + elm)) / this.items.length
    }
  }
  sum() {
    if (this.items.length < 1) {
      return 0
    } else {
      return this.items.reduce((acc, elm) => acc + elm)
    }
  }
};

module.exports = SortedList;