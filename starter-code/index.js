class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.sort((a, b) => a - b).length
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds")
    } else {
      return this.items.slice(pos, pos + 1)
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      let maxNum = this.items.slice(-1)
      return maxNum
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      let minNum = this.items.slice(0, 1)
      return minNum
    }
  }

  sum() {
    return this.items.reduce((acc, elm) => (acc + elm), 0)
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;
