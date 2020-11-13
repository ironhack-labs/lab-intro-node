class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos <= this.items.length && pos >= 0) {
      var value = this.items[pos];
      return value;
    } else {
      throw new Error('OutofBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      var highestValue = this.items[this.items.length - 1];
      return highestValue;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      var lowestValue = this.items[0];
      return lowestValue;
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      var sum = this.items.reduce((a, b) => a + b);
      return sum;
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0){
      var sum = this.items.reduce((a, b) => a + b);
      let average = sum / this.items.length;
      return average;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;