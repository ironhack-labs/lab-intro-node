var SortedList = function() {
 this.items = [];
 this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function(a,b){
      return a-b;
  });
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
}
SortedList.prototype.max     = function() {
  return this.items[this.items.length-1];
}
SortedList.prototype.min     = function() {
  return this.items[0];
}
SortedList.prototype.average = function() {
  var a = 0; 
  for (i=0; i<this.items.length; i++){
    a += this.items[i];
  }
  return a/this.items.length;
}
SortedList.prototype.sum     = function() {
  var a = 0; 
  for (i=0; i<this.items.length; i++){
    a += this.items[i];
  }
  return a;
}
module.exports = SortedList;
