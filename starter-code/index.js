class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length) {
      return Math.max(...this.items);
    }
    throw new Error('EmptySortedList');
  }

  min() {
    if (this.length) {
      return Math.min(...this.items);
    }
    throw new Error('EmptySortedList');
  }

  average() {
    if (this.length) {
      return this.sum() / this.length;
    }
    throw new Error('EmptySortedList');
  }

  sum() {
    if (this.length) {
      return this.items.reduce((sum, num) => num + sum);
    }
    return 0;
  }
}

module.exports = SortedList;

myList = new SortedList([1, 2, 3]);

console.log(myList);
