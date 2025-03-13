class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length || pos < 0 || this.length === 0) {
      throw new Error("OutOfBounds");
    } return this.items[pos];
  }

  max() {
    if (this.length ===0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length ===0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    return this.items.reduce((acc, item) => acc + item, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } return this.sum() /this.length;
  }
}

module.exports = SortedList;
