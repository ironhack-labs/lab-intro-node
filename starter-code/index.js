var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length = this.items.length;
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
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this.items[i];
  }
  return Math.floor(sum / this.length);
};
SortedList.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this.items[i];
  }
  return sum;
};

module.exports = SortedList;
