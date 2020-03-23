class SortedList {
  constructor(item) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    const addValue = this.items.push(item)
    const itemArray = this.items.sort((a, b) => a - b)
    this.length = itemArray.length
  }

  get(pos) {
    const addX = this.items[pos]
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds")
    }
    return addX
  }

  max() {
    const maxValue = Math.max(...this.items)

    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    return maxValue
  }

  min() {
    const minValue = Math.min(...this.items)

    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    return minValue
  }

  sum() {
    const sumValue = this.items.reduce((acc, val) => {
      return acc + val
    }, 0)
    if (this.length == 0) {
      return 0
    }

    return sumValue
  }

  avg() {
    const avgValue = this.sum() / this.length

    if (this.length == 0) {
      throw new Error("EmptySortedList")
    }
    return avgValue
  }
}

module.exports = SortedList
