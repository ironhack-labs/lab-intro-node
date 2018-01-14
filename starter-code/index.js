var SortedList = function() {
this.items = [];
this.length = this.items.length;
};

SortedList.prototype.add = function(x) {
  this.items.push(x);
  this.items.sort();
  this.length++;
};

SortedList.prototype.get = function(a) {
  this.getItem = this.items[a - 1];
  return this.getItem;
};

SortedList.prototype.max = function() {
  var a = this.length - 1;
  return this.items[a];
};

SortedList.prototype.min = function() {
  return this.items[0];
};

SortedList.prototype.average = function() {
  if (this.length === 0){
    return false;
  } else { this.itemSum = this.items.reduce(function(a, b){ return a + b; })
  this.average = this.itemSum/this.length;
  return this.average;
  };
};

SortedList.prototype.sum = function() {
  if (this.length === 0){
    return false;
  } else {
  this.itemSum = this.items.reduce(function(a, b){ return a + b; })
  return this.itemSum;
  };
};

module.exports = SortedList;

new SortedList();
