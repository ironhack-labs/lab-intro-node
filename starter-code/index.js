class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort((el1, el2) => {
      if (el1 > el2) return 1;
      else return -1;
    });
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    var max = this.items.reduce(function(a, b) {
      return Math.max(a, b);
    });
    return max;
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    var min = this.items.reduce(function(a, b) {
      return Math.min(a, b);
    });
    return min;
  }
  sum() {
    var sum = 0;
    this.items.forEach(function(e) {
      sum += e;
    });
    return sum;
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    var average = this.sum() / this.length;
    return average;
  }
}
var hello = new SortedList();
hello.add(12);
hello.add(14);
hello.add(8);

module.exports = SortedList;
