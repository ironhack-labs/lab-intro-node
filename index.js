class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (!this.items.includes(pos)) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.items.length == 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length == 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length == 0) return 0;
    else return this.items.reduce((a, b) => a + b);
  }

  avg() {
    return this.items.reduce((a, b) => a + b) / this.length;
  }
}

module.exports = SortedList;
