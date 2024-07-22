class SortedList {
  constructor() {
    {
      this.items = [],
        this.length = this.items.length
    }
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
    return this.items
  }

  get(pos) {
    if (pos > this.length) throw new Error("OutOfBounds");
    return this.items[pos]
  }
  max() {
    if (!this.length) throw new Error("EmptySortedList")
    return Math.max(...this.items)
  }

  min() {
    if (!this.length) throw new Error("Empty SortedList")
    return Math.min(...this.items)
  }

  sum() {
    return !this.items.length ? 0 : this.items.reduce((a, b) => { return a + b }, 0)
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList")
    return this.items.reduce((a, b) => a + b) / this.length
  }
}

module.exports = SortedList;
