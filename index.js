class SortedList {
  constructor() {
    this.items = [];
  }

  get length() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= this.length) throw new Error("OutOfBounds");
    return this.items.at(pos);
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items.at(-1);
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items.at(0);
  }

  sum() {
    return this.items.reduce((acc, value) => acc + value, 0);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
