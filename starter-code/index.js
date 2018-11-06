class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort( function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    return this.items[pos -1];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, oneItem) => acc += oneItem, 0);
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
   return (this.items.reduce((acc, oneItem) => acc += oneItem, 0)) / this.items.length;
  }
};



module.exports = SortedList;
