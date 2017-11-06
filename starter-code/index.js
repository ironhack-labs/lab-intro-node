var SortedList = function() {
  this.list = [];
  this.length = this.list.length;
};

SortedList.prototype.add  = function(item) {
  this.list.push(item);
  this.list.sort();
  this.length++;
}
SortedList.prototype.get     = function(pos) {
  return this.list[pos - 1];
}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
