class SortedList {
  constructor() {
      this.items = [] ;
      this.length = this.items.length ;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length; no
  }

  get(pos) {
    if (pos < this.items.length && pos >= 0) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
