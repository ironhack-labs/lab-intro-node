class SortedList {
  constructor(items, length) {
    this.items = [],
      this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.length || pos < 0) {
      throw new Error('OutOfBounds')
    }
    return this.items[pos]

  }


  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;