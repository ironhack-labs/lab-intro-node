class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(nth) {
    this.length = this.items.length;
    return this.items[nth - 1];
  }

  max() {
    return Math.max(...this.items);
  }

  min() {
    return Math.min(...this.items);
  }

  average() {
    if (this.items.length === 0) { return this.items.sort((a, b) => a - b); }
    return this.sum() / this.items.length;
  }

  sum() {
    if (this.items.length === 0) { return this.items.sort((a, b) => a - b); }
    return this.items.reduce((sum, item) => sum + item);
  }

}

module.exports = SortedList;



