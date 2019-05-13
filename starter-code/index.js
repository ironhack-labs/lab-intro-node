class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length

  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (this.length > 0) {
      return Math.max(...this.items) // Porque los 3 puntos
    } else {
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if (this.length > 0) {
      return Math.min(...this.items) // Porque los 3 puntos
    } else {
      throw new Error("EmptySortedList")
    }
  }
  average() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.length
    } else {
      throw new Error("EmptySortedList")
    }
  }
  sum() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b)
    } else {
      return 0
    }
  }
};

module.exports = SortedList;