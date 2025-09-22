class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("Emptystoredlist");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty Sorted.List");
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
