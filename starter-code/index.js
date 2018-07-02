var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a,b){
    return a - b;
  });
  this.length = this.items.length;
}

SortedList.prototype.get     = function(pos) {
  var result = this.items[pos];
  return result;
}

SortedList.prototype.max     = function() {
  var currentMax = 0;
  this.items.forEach(function(element){
    if(element>currentMax){
      currentMax = element;
    }
  });
  return currentMax;
}

SortedList.prototype.min     = function() {
  var currentEl = this.items[0];
  this.items.forEach(function(element){
    if(element<currentEl){
      currentEl=element;
    }
  });
  return currentEl;
}

SortedList.prototype.average = function() {
  var sum = 0;
  var count = 0;
  this.items.forEach(function(element){
    sum += element;
    count++;
  });
  return sum/count;
}

SortedList.prototype.sum     = function() {
  var sum = 0;
  this.items.forEach(function(element){
    sum += element;
  });
  return sum;
}

module.exports = SortedList;
