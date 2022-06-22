class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) { return a - b });
    this.length = this.items.length
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else { }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      let max = Math.max(...this.items);
      return max
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.length
    }
  }
}

module.exports = SortedList;
