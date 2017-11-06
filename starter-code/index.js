"use strict";

var SortedList = function() {
  this.length=0;
  this.list=[];
};

SortedList.prototype.add = function(item) {
  this.list.push(item);
  this.length++;
  if (this.length>1) {
    this.list.sort(function(a, b) {
      return a-b;
    });
  }
};

SortedList.prototype.get     = function(pos) {
  return this.list[pos-1];
};

SortedList.prototype.max     = function() {
  return this.list[this.list.length-1];
};

SortedList.prototype.min     = function() {
  return this.list[0];
};

SortedList.prototype.average = function() {
  var average = 0;
  for (var i=0; i<=this.list.length-1; i++) {
    average = average + this.list[i];
  }
  return average / this.list.length;
};

SortedList.prototype.sum     = function() {
  var sum=0;
  for (var i=0; i<=this.list.length; i++) {
    sum += this.list[i];
  }
};

module.exports = SortedList;
