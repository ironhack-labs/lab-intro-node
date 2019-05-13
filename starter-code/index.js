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
    return this.items[pos - 1]
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList")
    else return this.items[this.length - 1]
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList")
    else return this.items[0]
  }

  sum() {
    if (this.length === 0) return 0
    return this.items.reduce((ac, item) => ac += item)
  }

  average() {
    if (this.length === 0) throw new Error("EmptySortedList")
    else return this.sum() / this.length
  }
};

module.exports = SortedList;
