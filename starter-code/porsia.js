class SortedList{
  constructor(sortedList, length){
    this.sortedList = [];
    this.length = this.sortedList.length;
  }
}



var SortedList = function(sortedList, length) {
  this.sortedList = [];
  this.length = this.sortedList.length;
};

SortedList.prototype.add     = function(item) {
  this.sortedList.push(item);
  this.sortedList.sort((a,b) => {
    return a - b;
  })
  this.length ++;
}
SortedList.prototype.get     = function(pos) {
  return this.sortedList[pos-1];
}
SortedList.prototype.max     = function() {
  return Math.max(...this.sortedList);
}
SortedList.prototype.min     = function() {
  return Math.min(...this.sortedList);
}
SortedList.prototype.average = function() {
  this.reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (this.sortedList.reduce(reducer, 0))/this.sortedList.length;
}
SortedList.prototype.sum     = function() {
  if(this.sortedList = []){
    return
  }
this.reducer = (accumulator, currentValue) => accumulator + currentValue;
  return this.sortedList.reduce(reducer, 0);
}
module.exports = SortedList;
