var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort((a, b) => a - b);
  this.length = this.items.length;
};
SortedList.prototype.get = function(pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  return Math.max(...this.items);
};
SortedList.prototype.min = function() {
  return Math.min(...this.items);
};
SortedList.prototype.average = function() {
  if (this.items.length === 0) {
    return "EmptySortedList";
  } else {
    return this.sum() / this.length;
  }
};
SortedList.prototype.sum = function() {
  const add = (a, b) => a + b;
  if (this.items.length === 0) {
    return "EmptySortedList";
  } else {
    return this.items.reduce(add);
  }
};
module.exports = SortedList;

// SortedList.items = [10, 20, 4, 13, 99];
// SortedList.add(13);
// console.log(this.items);
