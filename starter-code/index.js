var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function(a,b) {return a-b;});  
     
}


SortedList.prototype.get     = function(pos) {
  if (pos<1 || pos>this.length) 
    {
      return "error";
    } 
  return this.items[pos-1];      
}
SortedList.prototype.max     = function() {return Math.max(...this.items);}
SortedList.prototype.min     = function() {return Math.min(...this.items);}
SortedList.prototype.average = function() {
  if (this.length == 0) {
    return "error";
  }
  var sumArray = this.items.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;});
  return sumArray/this.length;}
SortedList.prototype.sum     = function() {
  if (this.length == 0) {
    return "error";
  }
  var sumArray = this.items.reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;});
  return sumArray;}

module.exports = SortedList;
