class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    let toSort = this.items;
    this.items = toSort.sort(function(a,b) { return a - b});
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    }
    return (this.items[pos]);
  }

  max() {

    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return (Math.max(...this.items));
  }

  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return (Math.min(...this.items));
  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    }
    return (this.items.reduce((a, b) => a + b, 0));
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum/this.items.length;
  }
}

// let items = [];
// let length = items.length;

// let sortedList = new SortedList(items, length);

module.exports = SortedList;
