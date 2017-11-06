var SortedList = function() {
  this.length = 0;
  this.list = [];
};


SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.list.sort();
  this.length++;
};

SortedList.prototype.get = function(pos) {}
SortedList.prototype.max = function() {}
SortedList.prototype.min = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum = function() {}

module.exports = SortedList;
