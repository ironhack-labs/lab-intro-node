class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      for (let i = 0; i < this.length; i++) {
        return this.items[pos];
      }
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max.apply(null, this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min.apply(null, this.items);
    }
  }

  sum() {
    var sum = this.items.reduce((cur, acc) => cur + acc, 0);
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
