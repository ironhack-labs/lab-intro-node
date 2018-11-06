class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }


  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) { return this.items[pos - 1]; }

  max() { return this.items[this.length - 1]; }

  min() { return this.items[0]; }

  average() {
    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }
}

module.exports = SortedList;
