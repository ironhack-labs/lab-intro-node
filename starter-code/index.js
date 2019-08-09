class SortedList {

  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    try {
      return this.items[pos];
    } catch (error) {
      return `Error: ${error} `;
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((sum, value) => sum + value);
  }
}

sl = new SortedList();
module.exports = SortedList;