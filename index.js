class SortedList {
  constructor() {
    this.items = []; // is an array
    this.length = 0; // is a number
  }

  add(item) {
    this.items.push(item); // new array and unsorted
    this.items.sort((a, b) => a-b);
    this.length++;
  }

  get(pos) {
    if (pos >= this.length || pos < 0) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items.reduce((a, b) => Math.max(a, b));
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items.reduce((a, b) => Math.min(a, b));
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, el) => acc + el, 0);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
