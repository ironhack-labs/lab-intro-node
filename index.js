class SortedList {

  constructor() {

    this.items = []
    this.length = 0

  }

  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b
    })
    this.length++

  }

  get(pos) {

    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }

  }

  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length - 1]
    }

  }

  min() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }

  }

  sum() {

    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((acc, elem) => {
        return acc + elem
      })
    }

  }

  avg() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      const totalSum = this.items.reduce((acc, elem) => {
        return acc + elem
      })
      const avg = totalSum / this.length
      return avg
    }

  }
}

module.exports = SortedList;
