var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.length++;
  this.items = this.sortNumeric(this.items);
};
SortedList.prototype.get = function(pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  var sortedItems = this.sortNumeric(this.items);
  return sortedItems[this.items.length - 1];
};
SortedList.prototype.min = function() {
  var sortedItems = this.sortNumeric(this.items);
  return sortedItems[0];
};
SortedList.prototype.average = function() {
  var sum = this.items.reduce(function(acc, curr, ix) {
    return (acc += curr);
  }, 0);
  return sum / this.items.length;
};
SortedList.prototype.sum = function() {
  var sum = this.items.reduce(function(acc, curr, ix) {
    return (acc += curr);
  }, 0);
  return sum;
};

SortedList.prototype.sortNumeric = function(array) {
  return array.sort(function(a, b) {
    return a - b;
  });
};

module.exports = SortedList;
