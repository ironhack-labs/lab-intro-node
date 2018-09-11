class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.pop();
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.shift();
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.length == 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b, 0)
    }
  }
};

module.exports = SortedList;