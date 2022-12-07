class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos >= this.length) throw new Error('OutOfBounds')
    return this.items[pos]
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList')
    return this.items.at(-1)
  }

  min() {
    if (!this.length) throw new Error("EmptySortedList")
    return this.items.at(0)
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if(!this.length) throw new Error('EmptySortedList')
    return this.sum() / this.length
  }
}

module.exports = SortedList;
