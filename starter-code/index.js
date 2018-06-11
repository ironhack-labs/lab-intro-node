var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.length = this.items.push(item);
  this.items.sort(function(item1, item2) {
    return item1 - item2;
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
  return this.sum() / this.length;
};

SortedList.prototype.sum = function() {
  if (this.length === 0) {
    return "EmptySortedList";
  }
  return this.items.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });
};

module.exports = SortedList;