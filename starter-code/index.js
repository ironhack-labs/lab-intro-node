class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    // eslint-disable-next-line no-plusplus
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) throw Error('EmptySortedList');
    return this.get(this.length);
  }

  min() {
    if (this.length === 0) throw Error('EmptySortedList');
    return this.get(1);
  }

  average() {
    if (this.length === 0) throw Error('EmptySortedList');
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
