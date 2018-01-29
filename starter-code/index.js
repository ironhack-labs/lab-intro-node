// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

class SortedList {
  constructor () {
    this.items = [];
    this.length = 0;
  }

  add (item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get (position) {
    return this.items[position - 1];
  }

  max () {
    return Math.max(...this.items);
  }

  min () {
    return Math.min(...this.items);
  }

  sum () {
    return this.items.reduce((acc, item) => acc + item, 0);
  }

  //   sum () {
  //     return this.items.reduce(function (acc, item) {
  //       return acc + item;
  //     }, 0);
  //   }

  average () {
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
