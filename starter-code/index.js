"Use Strict";

var SortedList = function() {
  this.list = [];
  this.length = 0;
};

SortedList.prototype.size = function() {
  return this.length();
};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.length++;
  if (this.length > 1) {
    this.list.sort(function(a, b) {
      return a - b;
    });
  }
};
SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};
SortedList.prototype.max = function() {
  return Math.max.apply(null, this.list);
};
SortedList.prototype.min = function() {
  return Math.min.apply(null, this.list);
};
SortedList.prototype.average = function() {
  if (this.length >= 1) {
    var result = this.list.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return result / this.length;
  }
};
SortedList.prototype.sum = function() {
  if (this.length >= 1) {
    var result = this.list.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return result;
  }
};

module.exports = SortedList;
