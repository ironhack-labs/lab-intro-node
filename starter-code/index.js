var SortedList = function(items, length) {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length++;
};
SortedList.prototype.get = function(pos) {
  return this.items[pos - 1];
};

SortedList.prototype.max = function() {
  return Math.max.apply(Math, this.items);
};
SortedList.prototype.min = function() {
  return Math.min.apply(Math, this.items);
};
SortedList.prototype.average = function() {
  return this.sum() / this.list.length;
};

SortedList.prototype.sum = function() {
  var total = this.list.reduce(function(sum, x) {
    return sum + x;
  }, 0);
  return total;
};

module.exports = SortedList;

var sl = new SortedList();
