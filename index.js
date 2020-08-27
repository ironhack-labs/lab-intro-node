/* eslint-disable no-plusplus */
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
      this.length = this.items.length;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          this.length = this.items.length;
        }
      }
    }
  }

  get(pos) {
    if (pos < this.lenght || pos >= 0 || this.lenght === 0) {
      return this.items[pos];
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length === 0 || this.length === 'undefined') {
      throw new Error('EmptySortedList');
    }
    const max = this.items.reduce((a, b) => Math.max(a, b));
    return max;
  }

  min() {
    if (this.length === 0 || this.length === 'undefined') {
      throw new Error('EmptySortedList');
    }
    const min = this.items.reduce((a, b) => Math.min(a, b));
    return min;
  }

  sum() {
    const sum = this.items.reduce((acc, cur) => acc + cur);
    return sum;
  }

  avg() {
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
