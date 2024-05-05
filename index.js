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
    if (pos === undefined) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {

    Math.max(this.items)
  }


  min() { }

  sum() { }

  avg() { }
}

module.exports = SortedList;
