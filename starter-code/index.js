class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length += 1;
  }
  get(pos) {
    if (this.items[pos -1] === undefined) {
      return  "OutOfBounds"
    } else {
      return this.items[pos -1];
    }
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }

  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
    
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.items.length;
    }
  }
  sum() {
    return this.items.reduce(function(num1, num2) {
      return num1 + num2;
    },0)
  }
};

module.exports = SortedList;
