var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length++;
};
SortedList.prototype.get = function(pos) {};
SortedList.prototype.max = function() {};
SortedList.prototype.min = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum = function() {};

module.exports = SortedList;
