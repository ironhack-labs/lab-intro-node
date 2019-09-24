class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    let sorted = this.items.sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
    });
    this.items = sorted;
  }

  get(pos) {
    if (pos <= this.length - 1) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length > 0) {
      let sum = this.items.reduce((acc, cur) => {
        return (acc += cur);
      }, 0);
      return sum;
    } else {
      return 0;
    }
  }

  average() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
