var SortedList = function() {
  this.length=[];
};

SortedList.prototype.add     = function(item) {
  this.length.push(item);
  this.length.sort(function (a,b){
    return a > b;
  });
};

SortedList.prototype.get     = function(pos) {

  return this.lenght[pos-1];
};
SortedList.prototype.max     = function() {};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};

module.exports = SortedList;
