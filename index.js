class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((e1,e2) => e1 - e2)

    this.length++;
  }

  get(pos) {
    if (pos > this.length && pos >= 0) {
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
    return this.items.reduce((e1,e2) => {
      return e1 + e2;
    }, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
