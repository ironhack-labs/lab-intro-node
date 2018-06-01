let SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  return this.items.sort(function(a,b) {
    return a-b;
  });
};
SortedList.prototype.get = function(pos) {
  return this.items[pos-1];
};
SortedList.prototype.max = function() {
  return Math.max(...this.items);
};
SortedList.prototype.min = function() {
  return Math.min(...this.items);
};
SortedList.prototype.average = function() {
  let sum = this.items.reduce(function(a,b){return a+b;}, 0);
  return sum/this.length;
};
SortedList.prototype.sum = function() {
  return this.items.reduce(function(a,b){return a+b;}, 0);
};

module.exports = SortedList;
