function SortedList() {};

SortedList.prototype = Object.create(Array.prototype);

SortedList.prototype.add = function(item) {
  this.push(item);
  this.sort((a, b) => a - b);
}
SortedList.prototype.get = function(pos) {
  return this[pos - 1];
}
SortedList.prototype.max = function() {
  return this[this.length - 1];
}
SortedList.prototype.min = function() {
  return this[0];
}
SortedList.prototype.average = function() {
  return (this.length <= 0) ? Error : this.sum() / this.length;
}

SortedList.prototype.sum = function() {
  return (this.length <= 0) ? Error : this.reduce((a, b) => a + b);
}

module.exports = SortedList;
