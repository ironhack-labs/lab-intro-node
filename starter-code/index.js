class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }
  get(pos) {
    if (this.items[pos])
      return this.items[pos]
    else
      throw new Error("OutOfBounds")
  }

  max() {
    if (this.length > 0)
      return Math.max(...this.items)
    else
      throw new Error("EmptySortedList")
  }

  min() {
    if (this.length > 0)
      return Math.min(...this.items)
    else
      throw new Error("EmptySortedList")
  }

  sum() {
    if (this.length > 0) {

      let sum = this.items.reduce((acc, currentValue) => acc + currentValue)
      return sum
    } else
      return 0
  }

  avg() {
    if (this.length > 0) {
      let sum = this.items.reduce((acc, currentValue) => acc + currentValue)
      let avg = sum / this.length
      return avg
    } else
      throw new Error("EmptySortedList")
  }
}

module.exports = SortedList;