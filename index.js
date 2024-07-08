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
    if (pos < 0 || pos >= this.items.length) {
      // this.items.length === undefined
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
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
    let result = 0;
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i];
    }
    return result;
  }

  avg() {
    let result = 0;
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] / this.items.length;
    }
    return result;
  }
}

module.exports = SortedList;
