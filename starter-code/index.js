var SortedList = function() {
  this.length = [];
};

SortedList.prototype.add = function(item) {
  this.length.push(item);
  this.length.sort((a, b) => a - b);
};

SortedList.prototype.get = function(pos) {
  return this.length[pos - 1];
}

SortedList.prototype.max = function() {
  return this.length[this.length.length - 1];
}
SortedList.prototype.min = function() {
  return this.length[0];
}
SortedList.prototype.average = function() {
  return this.sum()/this.length.length;
}
SortedList.prototype.sum = function() {
  return this.length.reduce((a,b) => a +b, 0);
}

module.exports = SortedList;
