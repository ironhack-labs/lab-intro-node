// var SortedList = function() {};

// SortedList.prototype.add = function(item) {};
// SortedList.prototype.get = function(pos) {};
// SortedList.prototype.max = function() {};
// SortedList.prototype.min = function() {};
// SortedList.prototype.average = function() {};
// SortedList.prototype.sum = function() {};

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    // this.items.reduce(a, b => Math.max(a, b));
    return Math.max(...this.items);
  }

  min() {
    // this.items.reduce(a, b => Math.min(a, b));
    return Math.min(...this.items);
  }
  average() {
    return this.items.reduce((a, b) => a + b, 0) / this.length;
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }
}

module.exports = SortedList;
// let mySortedList = new SortedList(3);
// console.log(mySortedList);
