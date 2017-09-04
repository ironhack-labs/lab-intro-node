var SortedList = function() {
  this.length = 0;
  this.sortedList = [];
};

SortedList.prototype.add     = function(item) {
  this.sortedList.push(item);
  this.length++;
  this.sortedList.sort(function(a, b) {
    return a - b;
  });
};
SortedList.prototype.get     = function(pos) {
  return this.sortedList[pos-1];
};
SortedList.prototype.max     = function() {
  this.sortedList.reverse();
  return this.sortedList[0];
};
SortedList.prototype.min     = function() {
  return this.sortedList[0];
};
SortedList.prototype.average = function() {
  var total = this.sortedList.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return total/this.sortedList.length;
};
SortedList.prototype.sum     = function() {
  var total = this.sortedList.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  return total;
};

module.exports = SortedList;
