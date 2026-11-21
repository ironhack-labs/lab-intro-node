class SortedList {
  constructor(items, length) {

    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.items.push(item)
    this.length = this.items.length

    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if(pos >= 0 && pos < this.items.length) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds")
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
