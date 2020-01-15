class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    return this.items
  }

  get(pos) {}

  max() {}
  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
