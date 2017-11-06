function SortedList (){
this.length = [];
};

SortedList.prototype.add     = function(item) {
   this.length.push(item);
   this.length.sort();
};

SortedList.prototype.get     = function(pos) {
 return this.length[pos-1];
};

SortedList.prototype.max     = function() {

};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};

module.exports = SortedList;
