function SortedList() {
};

SortedList.prototype = Object.create(Array.prototype);

SortedList.prototype.add     = function(item) {
  this.push(item);
}
SortedList.prototype.get     = function(pos) {
  return this.sort((a, b) => a - b )[pos - 1];
}

SortedList.prototype.max     = function() {
  return this[this.length - 1];
  return Error ;
}
SortedList.prototype.min     = function() {
  return this[0];
  return Error ;
}
SortedList.prototype.average = function() {
  return this.length == 0 ? Error : this.reduce((a, b) => a + b)/this.length;
}

SortedList.prototype.sum     = function() {
  return this.length == 0 ? Error : this.reduce((a, b) => a + b);
}

module.exports = SortedList;
