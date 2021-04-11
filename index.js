class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return item[pos];
  }

  max() {
    return this.items.sort((a, b) => a - b)[this.length - 1];
  }

  min() {
    return this.items[0];
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
