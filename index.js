class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a-b);
  }

  get(pos) {
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    }
      this.items.indexOf(pos)
      return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length -1]
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }
    return this.items.reduce((previousValue, currentValue) => previousValue + currentValue)
  }

  avg() {
    if (this.items.length === 0) {
    throw new Error('EmptySortedList');
    }
    return this.items.reduce((previousValue, currentValue) => previousValue + currentValue) / this.items.length
  }
}

module.exports = SortedList;
