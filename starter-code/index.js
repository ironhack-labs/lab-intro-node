class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return this.length;
  }
  get(pos) {
    if (typeof this.items[pos - 1] === "undefined") {
      throw new Error("OutOfBounds");
    }
    // if (pos > this.length - 1) {
    //
    // }
    // this.length = this.items.length;
    // this.items.sort();
    else return this.items[pos - 1];
  }
  max() {
    var max = this.items[this.length - 1];
    if (this.length > 0) {
      return max;
    } else throw new Error("EmptySortedList");
  }
  min() {
    var min = this.items[0];
    if (this.length > 0) {
      return min;
    } else throw new Error("EmptySortedList");
  }
  average() {
    if (this.length > 0) {
      var sum2 = this.items.reduce(function(a, b) {
        return a + b;
      });
      return sum2 / this.length;
    } else throw new Error("EmptySortedList");
  }
  sum() {
    if (this.length > 0) {
      var sum1 = this.items.reduce(function(a, b) {
        return a + b;
      });
      return sum1;
    } else return 0;
  }
}

module.exports = SortedList;
