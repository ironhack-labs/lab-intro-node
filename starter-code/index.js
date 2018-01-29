var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function(a, b) {
    return a - b;
  });
};
SortedList.prototype.get = function(pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  return this.items[this.length - 1];
};
SortedList.prototype.min = function() {
  return this.items[0];
};
SortedList.prototype.average = function() {
  return (
    this.items.reduce(function(a, b) {
      return a + b;
    }, 0) / this.length
  );
};
SortedList.prototype.sum = function() {
  return this.items.reduce(function(a, b) {
    return a + b;
  }, 0);
};

module.exports = SortedList;
