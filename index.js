class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)

    this.items.sort((a, b) => {
      return a - b
    })

    this.length++
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds')
    }
    return this.items.indexOf(pos)
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return Math.max(...this.items)

    // this.items.reduce((acc, cur) => {
    //   Math.max()
    // }, 0)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acc, cur) => {
      return acc + cur
    }, 0)

  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }
    return this.sum()/ this.items.length
  }
}

module.exports = SortedList;
