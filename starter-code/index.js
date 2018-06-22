var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
  };
  
  SortedList.prototype.add     = function(item) {
    this.items.push(item);
  
    this.items.sort(function(a,b){
      return (a-b);
    });
  
    this.length = this.items.length;
  }
  SortedList.prototype.get     = function(pos) {
      return this.items[pos - 1];
  }
  SortedList.prototype.max     = function() {
    if (this.length === 0) {
      return "EmptySortedList";
    }
  
    return this.items.reduce(function(a,b){
      return Math.max(a,b);
    })
  }
  SortedList.prototype.min     = function() {
    if (this.length === 0) {
      return "EmptySortedList";
    }
  
    return this.items.reduce(function(a,b){
      return Math.min(a,b);
    })
  }
  SortedList.prototype.average = function() {
    var sum = this.sum();
    return sum / this.length;
  }
  SortedList.prototype.sum     = function() {
    var sum = 0;
    this.items.forEach(function(item) {
      sum += item;
    })
  
    return sum;
  }
  
  module.exports = SortedList;