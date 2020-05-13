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
    if (!this.length) {
      this.getError("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length) {
      this.getError("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, elem) => acc + elem, 0);
  }

  avg() {
    if (!this.length) {
      this.getError("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
