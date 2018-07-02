

var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item1,item2,item3) {
  this.items.push(item1);
  this.items.sort(function(a,b){
    return a-b;
  });
  this.length;
};

SortedList.prototype.get     = function(pos) {
  var g = this.items[pos];
  return g;
}

SortedList.prototype.max     = function() {
  var ma = Math.max(this.items);
  return ma;
}
SortedList.prototype.min     = function() {
  var mi = Math.min(this.items);
  return mi;
}
SortedList.prototype.average = function() {
  var sum = this.items.reduce (function(previous, current){
    current += previous;
  });
  var avg = sum/this.items.length;
}
SortedList.prototype.sum     = function() {
  var sum = 0;
  for (i=0; i < this.items.length; i++);
  sum += this.items[i];
}


module.exports = SortedList;

