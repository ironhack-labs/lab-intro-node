class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    // if (pos > this.length || pos <= 0) return 0;

    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) throw Error('EmptySortedList');

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) throw Error('EmptySortedList');

    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, cv) => acc + cv, 0);
  }

  average() {
    if (this.length === 0) throw Error('EmptySortedList');
    return this.sum() / this.length;
  }

};

module.exports = SortedList;
