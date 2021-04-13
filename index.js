class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  checkLength() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  add(item) {
    this.items.push(item);
    this.length++;
    if (this.items.length > 1) {
    this.items.sort((a,b) => a - b);
    }
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    this.checkLength()
    return Math.max(...this.items);
  }

  min() {
    this.checkLength()
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc,val) => {
      return acc + val;
    },0);
  }

  avg() {
    this.checkLength()
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
