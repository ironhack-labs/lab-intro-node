class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  updateLength() {
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.updateLength()
  }

  get(pos) {
    if (!this.items[pos]) throw new Error('OutOfBounds');

    return this.items[pos]
  }

  max() {
    if (!this.items.length) throw new Error('EmptySortedList');

    return Math.max(...this.items)
  }

  min() {
    if (!this.items.length) throw new Error('EmptySortedList');

    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((sum, num) => {
      return sum += num;
    }, 0)
  }

  avg() {
    if (!this.items.length) throw new Error('EmptySortedList')

    return this.sum() / this.items.length
  }
}

module.exports = SortedList;