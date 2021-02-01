class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length || pos < 0) throw new Error('OutOfBounds');    
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items.sort((a,b) => b-a)[0];
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.items.sort((a,b) => a-b)[0];
  }

  sum() {
    return this.items.reduce((sum, item) => sum+item, 0);
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
