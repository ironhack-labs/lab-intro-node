class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    let item = this.items[pos];
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return item;
  }

  max() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {
    let total = 0;
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    }
    for (let i = 0; i < this.length; i++) {
      total += this.items[i];
    }
    return total / this.length;
  }
}

module.exports = SortedList;
