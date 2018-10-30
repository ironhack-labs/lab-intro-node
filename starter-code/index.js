class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a,b) => a-b)
    this.length++
  }

  get(pos) {
    return this.items[pos-1]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items)
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    const sum = this.items.reduce((acc, item) => {
      return acc + item
    },0)
    return sum / this.length
  }

  sum() {
    return this.items.reduce((acc, item) => {
      return acc + item
    },0)
  }
};

module.exports = SortedList;