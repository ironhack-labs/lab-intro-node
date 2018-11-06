/* eslint-disable no-unused-expressions */
class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort();
    this.length += 1;
  }

  get(pos) {
    if (!this.items[pos - 1]) {
      return 'OutOfBounds';
    }
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.sort()[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.sort()[0];
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }

  sum() {
    return this.items.reduce((acc, val) => { return acc + val }, 0);
  }
}

const sl = new SortedList();

sl.add(20);
sl.add(10);
sl.add(30);
sl.add(20);
sl.add(10);
console.log(sl.items, sl.length, sl.get(1));


module.exports = SortedList;
