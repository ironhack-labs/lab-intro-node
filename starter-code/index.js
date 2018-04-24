var SortedList = function() {
  this.length = 0;
  this.list = [];
};

SortedList.prototype.add     = function(item) {
  this.list.push(item);
  this.length++;
  this.list.sort();
};
SortedList.prototype.get     = function(pos) {
  return this.list[pos - 1];
};
SortedList.prototype.max     = function() {
  return this.list[this.length -1];
};
SortedList.prototype.min     = function() {
  return this.list[0];
};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {
  for(i = 0 ; i < this.list.length; i++ ){
    var sum = 0;
  }
};

module.exports = SortedList;
