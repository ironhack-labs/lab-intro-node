//jshint esversion:6

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
  add(item) {
    this.items.push(item);
    this.items.sort(
      function (a, b) {
        return a - b
      }
    );
    this.length++;
    //this.length = this.length + 1
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }


  min() {
    if (this.length > 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let sum = 0;
      this.items.forEach(function (elem) {
        sum += elem;
      })
      return sum;
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      let sum = 0;
      this.items.forEach(function (elem) {
        sum += elem;
      })
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
