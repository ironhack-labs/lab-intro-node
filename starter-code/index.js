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
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList
