class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }
  get(pos) {
    return this.items[pos]
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.length === 0) {
      throw Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }
  average() {
    if (this.length === 0) {
      throw Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }
  }
  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((accumulator, value) => accumulator + value)
    }
  }
};

module.exports = SortedList;