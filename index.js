class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.items.forEach((element) => this.length++);
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
