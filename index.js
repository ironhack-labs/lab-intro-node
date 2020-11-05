class SortedList {
   
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort( (a,b) => {
      return a-b;
    });
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos > this.items.length) {
      throw new Error ('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmtySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmtySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;
    if (this.items.length === 0) {
      return sum;
    } else {
      sum = this.items.reduce((acc, elem) => {
        return acc += elem;
      }, 0);
      return sum;
    }
  }

  avg() {
    let sum = 0;
    if (this.items.length === 0) {
      throw new Error('EmtySortedList');
    } else {
      sum = this.items.reduce((acc, elem) => {
        return acc += elem;
      }, 0);
      return (sum/this.items.length);
    }    
  }
}

module.exports = SortedList;
