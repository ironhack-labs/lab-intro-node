class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (Number.isInteger(pos) && pos < this.items.length && pos >= 0 ) {
      return this.items[pos];
    } else { 
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(( a, b) => a - b);
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.sort(( a, b) => a - b);
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      this.items.sort(( a, b) => a - b);
      return this.items.reduce((acc, cur) => acc + cur);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((acc, cur) => acc + cur);
      return sum/this.items.length;
    }
  }
}

module.exports = SortedList;
//npm test