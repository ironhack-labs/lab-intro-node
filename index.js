class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort(((a, b) => a - b))
    this.length++;
  }
  get(pos) {
    if (pos > this.items.length) throw new Error('OutOfBounds')
    return this.items.filter((num, index, filtered) => filtered.indexOf(num) === pos)
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList')
    return this.items.reduce((a, b) => a + b, 0) / this.items.length
  }
}

module.exports = SortedList;