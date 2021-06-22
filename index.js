class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    //newArray.sort();
    this.items = this.items.sort((a, b) => a - b);
    //newArray.sort();
    //(function(a, b) {
      //return a-b
    //});
    this.length = this.items.length;
  }

  get(pos) {
    //let newNum = this.items[pos];
    if (pos <= this.length - 1) {
      return this.items[pos];
    }
    if (pos > this.length -1) {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length !== 0) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length !== 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
    return this.items.reduce((a,b) => a+b, 0)
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
    let average = this.items.reduce((a,b) => a+b, 0)/this.items.length;
    return average;
    }
  }
}

module.exports = SortedList;
