var assert = require('assert');

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  };
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function (a, b) {
      return a - b;
    });
  };
  get(pos) {
    return this.items[pos-1];
  };
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  };
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  };
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let temp = 0;
      for (var i = 0; i < this.items.length; i++) {
        temp += this.items[i];
      }
      return temp;
    }
  }
};

module.exports = SortedList;
