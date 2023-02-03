class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
    } else throw new Error('OutOfBounds')
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else return this.items[this.length - 1]
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else return this.items[0]
  }

  sum() {
    let sum = 0
    this.items.forEach(item => {
      sum += item
    })

    if (this.length === 0) {
      return 0
    } else return sum
  }

  avg() {
    let sum = 0
    this.items.forEach(item => {
      sum += item
    })

    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else return (sum / this.length)
  }
}

module.exports = SortedList;
