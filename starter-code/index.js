// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    return this.items[this.length - 1];
  }

  min() {
    return this.items[0];
  }

  average() {
    return this.sum() / this.length;
  }

  sum() {
    return this.items.reduce((a, c) => a + c, 0);
  }
}
module.exports = SortedList;
