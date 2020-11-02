class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => a -b);
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos > this.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    if (!this.length) return 0;
    return this.items.reduce((acc,cv) => acc + cv);
  }

  avg() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
