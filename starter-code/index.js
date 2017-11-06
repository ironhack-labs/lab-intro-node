var SortedList = function() {
this.sortedList = [];
this.length = 0;
};

SortedList.prototype.add = function(item) {
this.length += 1;
this.sortedList.push(item);
this.sortedList.sort(function (a, b){
return a - b;
});
return this.sortedList;
};


SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
