class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }
  get(pos) {
    this.length = this.items.length
    if(!this.items[pos-1]) {
      return "OutOfBounds"
    }
    return this.items[pos-1]
  }
  max() {
    if(!this.items.length) throw new Error("EmptySortedList")
    return this.items[this.items.length - 1]
  }
  min() {
    if(!this.items.length) throw new Error("EmptySortedList")
    return this.items[0]
  }
  average() {
    if(!this.items.length) throw new Error("EmptySortedList")
    return this.items.reduce((a, b) => a + b)/this.items.length
  }
  sum() {
    return (this.items.length == 0) ? 0 : this.items.reduce((a, b) => a + b)
  }
};

module.exports = SortedList;
