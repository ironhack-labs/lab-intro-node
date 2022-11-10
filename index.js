class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {}

  max() {
    Math.max(this.items);
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
