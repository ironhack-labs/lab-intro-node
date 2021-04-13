class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    let testItem = this.items[pos];
    if (testItem) {
      return testItem;
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
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
      return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
