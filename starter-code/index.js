class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items.indexOf(pos);
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let sum = 0;
    if (this.items.length <= 0) {
      return sum;
    } else {
      return this.items.reduce((sum, item) => sum + item, 0);
    }
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((sum, item) => sum + item, 0) / this.items.length
    }
  }
}

module.exports = SortedList;