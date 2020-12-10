class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    this.items[pos];
    if (this.items[pos] > this.items.length) {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    Math.max(...this.items);
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    Math.max(...this.items);
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    this.items.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
  }

  avg() {
    this.items.sum() / this.items.length;
  }
}

module.exports = SortedList;
