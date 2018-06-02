var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
}

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b){return a - b});
  this.length = this.items.length;
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1];
}
SortedList.prototype.max     = function() {return Math.max(...this.items);}
SortedList.prototype.min     = function() {return Math.min(...this.items);}
SortedList.prototype.average = function() {
  this.sum = this.items.reduce(function(a,b){return a+b;}, 0);
  return this.sum/this.length;
}
SortedList.prototype.sum     = function() {
  return this.items.reduce(function(a,b){return a+b;}, 0);
}

module.exports = SortedList;
