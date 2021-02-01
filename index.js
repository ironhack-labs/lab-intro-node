class SortedList {
  constructor(items) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    const sorted = this.items.sort(function (a, b) {
      return a - b;
    });

    return sorted;
  }

  get(pos) {
    if (pos > this.items.length - 1) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
