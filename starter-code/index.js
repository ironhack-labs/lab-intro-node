var SortedList = function() {
  this.sl = {};
};

SortedList.prototype = function () {

};

SortedList.prototype.add = function(item) {
  this.sl.push(item);

};
SortedList.prototype.get = function(pos) {}
SortedList.prototype.max = function() {}
SortedList.prototype.min = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum = function() {}

module.exports = SortedList;
