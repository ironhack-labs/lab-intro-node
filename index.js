class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      if ((a = b)) return 0;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.length - 1 >= pos) {
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
