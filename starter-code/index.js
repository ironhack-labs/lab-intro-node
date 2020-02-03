class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
    this.total = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    return pos < this.items.length ? this.items[pos] : error("OutOfBounds")
  }

  max() {
    return this.length !== 0 ? this.items[this.length - 1] : error("EmptySortedList")
  }

  min() {
    return this.length !== 0 ? this.items[0] : error("EmptySortedList")
  }

  sum() {
    this.items.forEach(e => {
      this.total += e
    })
    return this.total
  }

  avg() {
    return this.length !== 0 ? this.sum() / this.length : error("EmptySortedList")
  }
}

module.exports = SortedList;