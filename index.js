class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
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
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }
  
  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, item) => acc + item, 0);
  }
  
  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((acc, item) => acc + item, 0) / this.length;
  }
}

module.exports = SortedList;
