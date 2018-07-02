var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(x) {
  this.items.push(x);
  this.items.sort((a, b) => a - b);
  this.length++;
};

SortedList.prototype.get = function(pos) {
    return this.items[pos-1];
};


SortedList.prototype.max = function() {
    return this.items[this.length-1];
};

SortedList.prototype.min = function() {
    return this.items[0];
};

SortedList.prototype.average = function() {
    return this.sum() / this.length;
};

SortedList.prototype.sum = function() {
    return this.items.reduce((acc, e) => (acc + e),0);
};

module.exports = SortedList;
