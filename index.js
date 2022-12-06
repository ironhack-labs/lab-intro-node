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
    // if (this.items[pos] === undefined) throw new Error('OutOfBounds: element not on list')
    // return this.items[pos]
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
