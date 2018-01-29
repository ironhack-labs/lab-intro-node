// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

// const array = [1, 7, 10, 37, 98];

class SortedList {
  constructor () {
    this.items = [];
    this.length = this.items.length;
  }

  add (x) {
    this.items.push(x);
    this.length += 1;
    this.items.sort();
  }
}

// const List = new SortedList(array, array.length);

module.exports = SortedList;
