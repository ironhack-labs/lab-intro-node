class SortedList {
  constructor(items, legth) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    }
    return this.items.reduce((acc, val) => {
      return acc + val
    })
  }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/ this.length
    }
  }
}

module.exports = SortedList;
