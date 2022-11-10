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
    return Math.max(this.items);
  }

  min() {
    return Math.min(this.items);
  }

  sum() {
    this.items.reduce((accumulator, current) => accumulator + current);
    return this.sum;
  }

  avg() {}
}

module.exports = SortedList;
