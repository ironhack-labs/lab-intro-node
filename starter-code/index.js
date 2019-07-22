class SortedList {
  constructor() {
    this.items = [],
      this.length = 0
  }
  add(item) {
    this.length++
    this.items.push(item)
    this.items.sort((a, b) => a - b)
  }
  get(pos) {
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds")
    } else return this.items[pos]
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else return Math.max(...this.items)
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else return Math.min(...this.items)
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else return this.items.reduce((a, b) => a + b) / this.length
  }

  sum() {
    if (this.length == 0) {
      return 0
    } else return this.items.reduce((a, b) => a + b)
  }

};

module.exports = SortedList;