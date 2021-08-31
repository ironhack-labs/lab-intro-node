class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {

    this.items.push(item)
    this.items.sort(function (a, b) {
      return a - b
    })
    this.length += this.items.length

  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    } else return this.items.indexOf(pos);
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else return Math.min(...this.items)
  }

  sum() {

    return this.items.reduce((a, b) => a + b, 0)
    throw new Error('EmptySortedList');
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else { return this.items.reduce((a, b) => a + b, 0) / this.items.length }

  }
}

module.exports = SortedList;
