class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
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

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((ac,cv)=> ac +cv);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.reduce((ac,cv)=> ac +cv) / this.items.length;
  }
}

module.exports = SortedList;