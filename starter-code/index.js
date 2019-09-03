class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos]
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.items.length - 1]
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else return this.sum() / this.items.length
  }

  sum() {
    const sum = this.items.reduce((total, items) => total + items, 0)
    return sum
  }
};

module.exports = SortedList;