var SortedList = function() {
  this.list = [];
  this.length = 0;

};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.length++;
  if (this.length > 1) {
    this.list.sort(function(a, b) {
      return a - b;
    });
  }
};


SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};



SortedList.prototype.max = function() {
  return this.list[this.length - 1];
};


SortedList.prototype.min = function() {
  return this.list[0];
};
SortedList.prototype.average = function() {
  var sum = 0;
  for (var ix = 0; ix < this.length; ix++) {
    sum += this.list[ix];
  }
  return sum / this.length;
};
SortedList.prototype.sum = function() {
  var sum = 0;
  if (this.length > 0) {
    for (var ix = 0; ix < this.length; ix++) {
      sum += this.list[ix];
    }
  }
  return sum;
};

module.exports = SortedList;
