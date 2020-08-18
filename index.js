class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items.reduce((a,b) => Math.max(a,b))
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return this.items.reduce((a,b) => Math.min(a,b));
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return (this.length > 0) ? this.items.reduce((a,b) => a + b) : 0;
  }

  avg() {
    if (this.length > 0) {
      return this.items.reduce((a,b) => a + b, 0) / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
