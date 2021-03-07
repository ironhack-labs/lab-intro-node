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
    if (this.length > pos && pos >= 0) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
