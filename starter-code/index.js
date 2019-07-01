class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null, this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(null, this.items);
  }


  average() {
    try {
      const sumAvg = this.items.reduce((a, b) => a + b);
      return sumAvg / this.length;
    } catch (e) {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    try {
      return this.items.reduce((a, b) => a + b);
    } catch (e) {
      return 0;
    }
  }
}

module.exports = SortedList;
