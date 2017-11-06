var SortedList = function() {
this.contents = [];
this.length = 0;
};

SortedList.prototype.add     = function(item) {
this.contents.push(item);
this.contents.sort(function(a,b){
  return a - b;
});


this.length++;

}
SortedList.prototype.get     = function(pos) {

  return this.contents[pos-1];

}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
