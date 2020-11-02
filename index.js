class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length < 1) throw new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length < 1) throw new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {
    if (this.items.length < 1) return 0
    let sum = 0
    this.items.forEach(n => {
      sum += n
    })
    return sum
  }

  avg() {
    if (this.items.length < 1) throw new Error('EmptySortedList')
    let sum = 0
    this.items.forEach(n => {
      sum += n
    })
    return sum / this.length
  }
}

module.exports = SortedList;