var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items = this.items.sort().slice();
  this.length = this.items.length;
};

SortedList.prototype.get = function(pos) {
  return this.items[pos];
};

SortedList.prototype.max = function() {
  return Math.max.apply(null, this.items);
};

SortedList.prototype.min = function() {
  return Math.min.apply(null, this.items);
};

SortedList.prototype.average = function() {
  return this.sum()/this.length;
};

SortedList.prototype.sum = function() {
  let sum = 0;
  for(i=0;i<this.length;i++) {
    sum = sum + this.items[i]
  }
  return sum;
};

module.exports = SortedList;