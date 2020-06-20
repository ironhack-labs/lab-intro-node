class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a, b) => a - b)

    this.length++
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
