var SortedList = function() {
  this.list = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.length++;
  this.list = this.list.sort(function(a, b) {
    return a - b;
  });
};
SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};
SortedList.prototype.max = function() {
  var maxValue = 0;
  for (var ix = 0; ix < this.list.length; ix++) {
    if (maxValue < this.list[ix]) {
      maxValue = this.list[ix];
    }
  }
  return maxValue;
};
SortedList.prototype.min = function() {
  var minValue = 100;
  for (var ix = 0; ix < this.list.length; ix++) {
    if (minValue > this.list[ix]) {
      minValue = this.list[ix];
    }
  }
  return minValue;
};
SortedList.prototype.average = function() {
  var average = 0;
  for (var ix = 0; ix < this.list.length; ix++) {
    average += this.list[ix];
  }

  return average / this.list.length;
};


SortedList.prototype.sum = function() {
  var sum = 0;
  for (var ix = 0; ix < this.list.length; ix++) {
    sum += this.list[ix];
  }

  return sum;
};


module.exports = SortedList;
