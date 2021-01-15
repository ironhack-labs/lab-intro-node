class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (this.items[pos] > 0 && this.items[pos] <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutofBounds'); 
    }
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items);
    }
    

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
