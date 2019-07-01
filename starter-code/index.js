class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort(function(a, b){return a-b});
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  
  average(x) {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
    return this.sum(x)/this.length
    }
  }
  
  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      return this.items.reduce(function(a,b){return a + b}, 0);
    }
  }

};

module.exports = SortedList;