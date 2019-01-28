class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {return a - b})
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.max(...this.items)
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return Math.min(...this.items)
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items.reduce(function(a, b) { return a + b; }) / this.length
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce(function(a, b) { return a + b; })
  }
};

module.exports = SortedList;
