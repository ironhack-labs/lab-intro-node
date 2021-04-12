class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((num1, num2) => {
      return num1 - num2;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] <= this.items.length - 1) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
    return this.sum()/ this.items.length
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
