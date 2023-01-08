class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (!pos || typeof pos !== "number" || pos > this.length) throw new Error("OutOfBounds");

    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");

    return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");

    return Math.min(...this.items);
  }

  sum() {
    if (!this.items.length) return 0;

    return this.items.reduce((prev, curr) => prev + curr, 0);
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList");

    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
