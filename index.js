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
    let getValue = this.items[pos]

    if (!getValue) {
      throw new Error("OutOfBounds")
    }

    return getValue
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }

    return this.items.slice(-1)
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }

    return this.items[0]
  }

  sum() {

    if (!this.items.length) {
      return 0
    }

    let sumValue = this.items.reduce((acc, elm) => acc + elm)

    return sumValue
  }

  avg() {

    if (!this.items.length) {
      throw new Error("EmptySortedList")
    }

    let average = this.items.reduce((acc, elm) => acc + elm) / this.items.length

    return average
  }
}

module.exports = SortedList;
