class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  getError(text) {
    throw new Error(text);
  }

  get(pos) {
    if (!this.items[pos]) {
      this.getError("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.items.length) {
      this.getError("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (!this.items.length) {
      this.getError("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
