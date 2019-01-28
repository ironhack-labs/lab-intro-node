class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
  get(pos) {
    var nth = this.items[pos - 1];
    return nth;
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort(function(a, b) {
      return a - b;
    });
    return this.items[this.items.length - 1];
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort(function(a, b) {
      return a - b;
    });
    return this.items[0];
  }
  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    var summedArray = this.items.reduce(function(acc, oneItem) {
      return acc + oneItem;
    });
    return summedArray;
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    var summedArray = this.items.reduce(function(acc, oneItem) {
      return acc + oneItem;
    });
    return summedArray / this.items.length;
  }
}

module.exports = SortedList;
