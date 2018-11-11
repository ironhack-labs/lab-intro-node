class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
    this.sum;
    this.average;
  }

  add(x) {
    this.length++;
    this.items.push(x);
    this.items.sort(function(a, b) {
      return a - b;
    });
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var max = Math.max(...this.items);
      return max;
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var min = Math.min(...this.items);
      return min;
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      /*       return this.average = this.sum / this.items.length;
       */

      var add = (a, b) => a + b;
      this.sum = this.items.reduce(add);
      return this.sum / this.items.length;
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      var add = (a, b) => a + b;
      this.sum = this.items.reduce(add);
      return this.sum;
    }
  }
}

module.exports = SortedList;
