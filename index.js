class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error ('EmptySortedList');
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length) {
      this.items.sort((a, b) => a - b);
      return this.items[0];
    } else {
      throw new Error('EmptySortedList')
    }
  } 

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce(
        (accumulatedSum, currentNumber) => accumulatedSum + currentNumber, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (this.items.reduce(
        (accumulatedSum, currentNumber) => accumulatedSum + currentNumber, 0) /
        this.items.length);
    }
  }
}

module.exports = SortedList;
