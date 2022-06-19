class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a - b);
  }

  get(pos) {

    if (pos <= this.items.length) {
    return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;

    for (let item of this.items) {
      sum += item;
    }
    return sum;
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList');
    } else {
    return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;
