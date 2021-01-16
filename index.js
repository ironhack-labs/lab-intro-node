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
    if (this.items[pos] === undefined) { throw new Error('OutOfBounds'); }
    else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() { 
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.shift()
    }
  }

  sum() { }

  avg() { }
}

module.exports = SortedList;
