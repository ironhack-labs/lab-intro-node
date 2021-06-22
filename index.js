class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a - b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length !== 0) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length !== 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let arr = this.items
    let output = arr.reduce((sum, elem) => {
      return sum += elem
    }, 0)

    return output;
  }

  avg() {
    if (this.length !== 0) {
      return this.sum() / this.length
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;