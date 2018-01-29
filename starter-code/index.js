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
  return this.items[this.items.length - 1];

  // this.items.reduce(function(a, b) {
  //   return Math.max(this.items);
  // });
};
SortedList.prototype.min = function() {
  return this.items[0];
};
SortedList.prototype.average = function() {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    total += this.items[i];
  }
  return total / this.items.length;
};
SortedList.prototype.sum = function() {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    total += this.items[i];
  }
  return total;
};

module.exports = SortedList;
