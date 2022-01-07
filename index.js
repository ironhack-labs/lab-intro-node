class SortedList {
  constructor(items) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => a - b);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length || pos < 0) {
      throw new Error('OutOfBounds');
    };

    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    };

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    };

    return Math.min(...this.items);
  }

  sum() {
    const itemsSum = this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return itemsSum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    };

    const average = (this.sum() / this.length);

    return average;
  }
}

module.exports = SortedList;