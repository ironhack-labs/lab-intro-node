class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {

      return this.items[pos];
    } else {
   throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      let max = this.items.reduce((acc,currVal) => Math.max(acc,currVal))
    return max;
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      let min = this.items.reduce((acc,currVal) => Math.min(acc,currVal))
    return min;
    }
  }

  sum() {
    if (this.length == 0) {
      return 0
    } else {
      let total = this.items.reduce((acc,currVal) => acc + currVal)
    return total;
    }
  }

  avg() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
    return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
