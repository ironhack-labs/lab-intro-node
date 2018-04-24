var SortedList = function() {
 this.newlist = [];

};

SortedList.prototype = function () {

};

SortedList.prototype.add     = function(item) {
  this.newlist.push(item);


};

SortedList.prototype.get     = function(pos) {};
SortedList.prototype.max     = function() {};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};

module.exports = SortedList;
