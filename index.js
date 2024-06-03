class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((itemA, itemB) => itemA - itemB);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length >= 1) {
      let max = Math.max(...this.items);
      return max;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length >= 1) {
      let min = Math.min(...this.items);
      return min;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
}

module.exports = SortedList;
