var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort((a, b) => a - b);
};

SortedList.prototype.get = function(pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  return Math.max.apply(null, this.items);
};
SortedList.prototype.min = function() {
  return Math.min.apply(null, this.items);
};
SortedList.prototype.average = function() {
  return this.items.reduce((acc, e) => acc + e, 0) / this.length;
};
SortedList.prototype.sum = function() {
  return this.items.reduce((acc, e) => acc + e, 0);
};

module.exports = SortedList;
