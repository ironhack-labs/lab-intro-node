class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
  }
  get(pos) {
    this.items.sort((a, b) => a - b)
    let position = this.items[pos]

    if (pos > this.length) {
      throw new Error("OutOfBounds")
    } else {
      return position
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let max = Math.max(...this.items)
      return max
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      let min = Math.min(...this.items)
      return min
    }
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      let average = this.items.reduce((a, b) => a + b, 0) / this.length
      return average
    }
  }
  sum() {
    if (this.length == 0) {
      return 0
    } else {
      const sum = this.items.reduce((a, b) => a + b, 0)
      return sum
    }
  }
};
module.exports = SortedList;