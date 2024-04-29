class SortedList {
  constructor() {
    this.length = 0
    this.items = []
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items) // Test de la clase de hoy
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items) // Test de la clase de hoy
  }

  sum() {
    if (this.length === 0) {
      return 0
    }
    return this.items.reduce((sum, current) => sum + current, 0)
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList

