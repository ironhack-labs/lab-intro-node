var SortedList = function(items,length) {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b){
    return a - b;
  });
  this.length ++;
};

SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
};

SortedList.prototype.max     = function() {
  max = Math.max.apply(Math,this.items);
  return max;
};

SortedList.prototype.min     = function() {
  min = Math.min.apply(Math,this.items);
  return min;
}
SortedList.prototype.average = function() {
  return this.sum()/this.length;
}

SortedList.prototype.sum = function() {
  return this.items.reduce(function(theSum, theValue){
    return theSum + theValue;
  }, 0);
  }

module.exports = SortedList;




