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
    return this.items[pos - 1];
  }

  max() {
    return this.items[this.items.length - 1];
  }
  min() {
    return this.items[0];
  }
  sum() {
    if (this.length === 0) {
      return new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, e) => acc + e);
    }
  }

  average() {
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
