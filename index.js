class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items.indexOf(pos);

  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }


  sum() {
    if (this.length === 0) {
      return 0;
    }
    const reducer = (acc, val) => acc + val;
    return this.items.reduce(reducer);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList;
