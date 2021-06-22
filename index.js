class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1]
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  // should return the sum of all elements in the list
  // should return 0 for an empty sorted list
  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (this.length == 0) {
      return 0
    } else {
      return this.items.reduce(reducer)
    }
  }

  // should return an EmptySortedList exception if there are no elements
  // should return the average of elements in the list
  avg() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce(reducer) / this.length;
    }
  }
}

module.exports = SortedList;
