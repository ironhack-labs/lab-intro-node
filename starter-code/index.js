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
    if (this.items.includes(this.items[pos])) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  checkIfNoItems() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
  }

  max() {
    this.checkIfNoItems();
    return Math.max(...this.items);
  }

  min() {
    this.checkIfNoItems();
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
  }

  avg() {
    this.checkIfNoItems();
    return this.items.reduce((a, b) => a + b) / this.length;
  }
}

module.exports = SortedList;
