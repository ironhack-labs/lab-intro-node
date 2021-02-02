class SortedList {
  constructor() {
    this.items = [];
    this.length = '';
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos > this.items.legth) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length < 1) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
