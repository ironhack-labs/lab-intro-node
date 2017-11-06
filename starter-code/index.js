var SortedList = function() {
  this.length = [];
  // this.length = this.list.length;
};

SortedList.prototype.add     = function(item) {
this.length.push(item);
this.length.sort();
};
SortedList.prototype.get     = function(pos) {};
SortedList.prototype.max     = function() {};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};

module.exports = SortedList;
