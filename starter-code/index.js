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
    // if (pos >= this.length - 1) {
    //   console.log('OutOfBounds');
    // } else {
    return this.items[pos - 1];
    // }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else
    throw new Error('EmptySortedList');
  }

  average() {
    if (this.length > 0) {
      let sumItems = this.items.reduce((acc, currentValue) => acc + currentValue);
      let avg = sumItems / this.length;
      return avg;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((acc, currentValue) => acc + currentValue);
  }
}


module.exports = SortedList;
