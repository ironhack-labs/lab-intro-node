class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return a-b
    })
  }

  get(pos) {
  if (this.items.indexOf(pos) === -1) {
    throw new Error('OutOfBounds');
  } else {
    return this.items.indexOf(pos)
  }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    let sum = this.items.reduce((curr, next) => {
      return curr + next
    }, 0)
    return sum
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
    return this.sum()/this.items.length
    }
  }
}

module.exports = SortedList;
