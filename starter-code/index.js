var SortedList = function() {
  this.list = [];
  this.length = this.list.length;
};

SortedList.prototype.add     = function(item) {this.list.push(item);};
SortedList.prototype.get     = function(pos) {};
SortedList.prototype.max     = function() {};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};


module.exports = SortedList;
