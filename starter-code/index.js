var SortedList = function() {
this.length = [];
// this.sortedlist = [];
};


SortedList.prototype.add     = function(a, b) {
  this.length.push(a);

  for(i=0; i < this.length; i++){
  this.length.sort(function(a,b) {
    if (a > b) {
      return -1;
    };
    if (a < b) {
      return 1;
    };
    return 0;

  });
 };
 };

SortedList.prototype.get     = function(pos) {};
SortedList.prototype.max     = function() {};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};

module.exports = SortedList;
