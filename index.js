class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if (pos < 0 || pos > this.length) {
      throw new Error('OutOfBounds');
    }
    else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return this.items[this.items.length - 1];
    }
  }
  
  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return this.items[0];
    }

  }

  sum() {
    if (this.items.length == 0) {
      return 0;
    }
    else {
    const total = this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0)
    return total;
  }
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
    const avg = this.sum() / this.items.length;
    return avg;
  }
  }
}

module.exports = SortedList;
