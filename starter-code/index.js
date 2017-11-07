var SortedList = function() {
this.length = [];
// this.sortedlist = [];
};


SortedList.prototype.add     = function(item) {
  this.length.push(item);
  this.length.sort();
 };

SortedList.prototype.get     = function(pos) {
  if(this.length.length < pos) return "OutOfBounds";
  return this.length[pos-1];
};

SortedList.prototype.max     = function() {
 return this.length[(this.length.length-1)];
};

SortedList.prototype.min     = function() {
  return this.length[0];
};

SortedList.prototype.average = function() {

  var total = 0;
   for (var i=0; i < this.length.length; i++) {
    total += this.length[i];
}
var average = total / this.length.length;
return average;
};


SortedList.prototype.sum     = function() {


};

module.exports = SortedList;
