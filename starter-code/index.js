class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.length < pos) { throw new Error("OutOfBounds") } return this.items[pos];
  }

  max() {
    if (this.length == 0) { throw new Error("EmptySortedList") } var max = this.items.reduce(function (a, b) { return Math.max(a, b); }); return max;
  }

  min() {
    if (this.length == 0) { throw new Error("EmptySortedList") } var max = this.items.reduce(function (a, b) { return Math.min(a, b); }); return max;
  }

  average() {
    if (this.length == 0) { throw new Error("EmptySortedList") }
    var sum = this.items.reduce((a, b) => a += b, 0);
    var average = sum / this.length;
    return average;
  }

  sum() {
    var sum = this.items.reduce((a, b) => a += b, 0);
    return sum;
  }
};

module.exports = SortedList;