class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    return this.items[this.length - 1];
  }

  min() {
    return this.items[0];
  }

  average() {
    return this.sum() / this.length;
  }

  sum() {
    return this.items.reduce((acc, e) => acc + e, 0);
  }
}

module.exports = SortedList;
