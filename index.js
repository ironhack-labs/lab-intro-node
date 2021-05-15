class SortedList {
  constructor() {
    this.items= [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length <= 1) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length -1];
  }

  min() {
    if (this.items.length <= 1) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.items.length <= 1) {
      return 0;
    }

    const sum = this.items.reduce((accumulator, currentValue) =>  accumulator + currentValue, 0);

    return sum;
  }

  avg() {
    if (this.items.length <= 1) {
      throw new Error('EmptySortedList');
    }
    
    const sum = this.sum();
    return sum/this.items.length
  }
}

module.exports = SortedList;
