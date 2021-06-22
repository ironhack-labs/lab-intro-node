class SortedList {
  constructor() {

    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => (a - b));
    this.length ++
  }

  get(pos) {
    if (pos <= this.items.length) return this.items[pos];

    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length != 0) return Math.max(...(this.items));

    throw new Error('EmptySortedList');
  } 

  min() {
    if (this.length != 0) return Math.min(...(this.items));

    throw new Error('EmptySortedList');
  }

  sum() {
    const sum = this.items.reduce (function (acc, item) {
      return acc + item;
    },0)
    return sum;
  }

  avg() {
    if (this.length != 0) return this.sum() / this.length;

    throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
