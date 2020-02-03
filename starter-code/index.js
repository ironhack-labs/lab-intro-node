class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length = this.items.length
  }

  get(pos) {
    if (this.items.length >= pos) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds")
    }

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let numbers = this.items
      return Math.max(...numbers)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let numbers = this.items
      return Math.min(...numbers)
    }

  }

  sum() {
    if (this.items.length != 0) {
      let sum = this.items.reduce((a, c) => a + c)
      return sum
    } else {
      return 0
    }
  }

  avg() {
    if (this.items.length != 0) {
      let avg = this.items.reduce((a, c) => a + c) / this.items.length
      return avg
    } else {
      throw new Error("EmptySortedList")
    }
  }
}

module.exports = SortedList;
