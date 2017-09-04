var SortedList = function() {
    this.length = 0;
    this.list = [];
  };
  
  SortedList.prototype.add     = function(item) {
    this.length++;
    this.list.push(item);
    this.list.sort(function(a,b){
      return a-b;
    });
  };
  SortedList.prototype.get     = function(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
    return  this.list[pos - 1];
  }   
  };
  SortedList.prototype.max     = function() {
    return this.list[this.list.length - 1];
  };
  SortedList.prototype.min     = function() {
    return this.list[0];
  };
  SortedList.prototype.average = function() {
    return this.sum() / this.length;
  };
  SortedList.prototype.sum     = function() {
    function reduceFn(total, curr) {
      return total + curr;
    }
      return this.list.reduce(reduceFn, 0);
  
  };
  
  module.exports = SortedList;