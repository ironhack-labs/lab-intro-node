var SortedList = function() {
  this.list = [];
  this.length = 0;
};

// EXERCISE START

// SortedList.prototype.size = function() {
//   return this.list.length;
// };

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.list.sort(function(a, b) {
    return a - b;
  });
  this.length++;
};

SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};


SortedList.prototype.max = function() {
  return this.list[this.list.length - 1];
};

SortedList.prototype.min = function() {
  return this.list[0];
};

SortedList.prototype.average = function() {
  var total = 0;
  for (var ix = 0; ix < this.list.length; ix++) {
    total += this.list[ix];
  }
  var average = total / this.list.length;
  return average;
};

SortedList.prototype.sum = function() {
  var total = 0;
  for (var ix = 0; ix < this.list.length; ix++) {
    total += this.list[ix];
  }
  return total;
};

module.exports = SortedList;
