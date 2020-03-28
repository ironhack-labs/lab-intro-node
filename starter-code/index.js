class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.length < pos) throw new Error("OutOfBounds");

    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");

    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");

    return this.items[0];
  }

  sum() {
    if (this.length === 0) return 0

    const reducer = (acc, cur) => acc + cur;

    return this.items.reduce(reducer);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");

    return this.sum() / this.length
  }
}

module.exports = SortedList;