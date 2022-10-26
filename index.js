class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items = this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
