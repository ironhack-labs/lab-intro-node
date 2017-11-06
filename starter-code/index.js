'use strict';

var SortedList = function() {
  this.list = [];
  this.length = 0;




};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.list.sort(function(a, b) {
    return a - b;
  });
  this.length++;
}

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
  var sum = 0;
  for (var i = 0; i < this.list.length; i++) {
    sum += this.list[i];

  }
  return sum / this.list.length;
};
SortedList.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.list.length; i++) {
    sum += this.list[i];

  };
  return sum;
}

module.exports = SortedList;
