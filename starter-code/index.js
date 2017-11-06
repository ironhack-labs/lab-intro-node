var SortedList = function(){
  this.length = [];
};

SortedList.prototype.add = function(item) {
  this.length.push(item);
  this.length.sort((value1, value2) => {
    return value1 - value2;
  });
}
SortedList.prototype.get = function(pos) {
  return this.length[pos];
}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
