class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    let maxPos = this.items.length - 1;
    if (!this.items.length) {
      throw new Error ('EmptySortedList');
    } else {
      return this.items[maxPos];
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error ('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    if (!this.items.length) {
      return 0;
    } else {
      this.items.reduce((acc, val) => sum = acc + val, 0);
    }
    return sum;
  }

  avg() {
    if (!this.items.length) {
      throw new Error ('EmptySortedList');
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
