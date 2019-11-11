class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length

  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => (a - b))
  }
  get(pos) {
    return this.items.length < pos ? "OutOfBounds" : this.items[pos]
  }
  max() {
    if (!this.items.length) throw new Error("EmptySortedList")
    else {
      return this.items[this.items.length - 1]
    }
  }
  min() {
    if (!this.items.length) throw new Error("EmptySortedList")
    else {
      return this.items[0]
    }
  }
  average() {
    if (!this.items.length) throw new Error("EmptySortedList")
    else {
      return this.sum() / this.items.length

    }
  }
  sum() {
    return !this.items.length ? 0 : this.items.reduce((a, b) => (a + b))
  }
};

module.exports = SortedList;