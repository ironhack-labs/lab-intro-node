// var SortedList = function() {};

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

add(x) {
  this.items.push(x);
  this.length.sort((a, b) => {
    return a - b;
  });
}

get() {

}

max() {
  return Math.max(...this.items)
}

min() {
  return this.items[0];
}

}

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
