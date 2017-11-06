function SortedList () {};

SortedList.prototype = Object.create(Array.prototype);

SortedList.prototype.add = function(item) {
  this.push(item);
};

SortedList.prototype.get = function(pos) {
  return this.sort((a,b)=>a-b)[pos-1]
};

SortedList.prototype.max  = function() {
  if(this.length == 0) return Error;
  return this[this.length-1];
};

SortedList.prototype.min = function() {
  if(this.length == 0) return Error;
  return this[0];
};

SortedList.prototype.average = function() {
  if(this.length == 0) return Error;
  return this.reduce((prev,next)=>prev+next)/this.length;
};

SortedList.prototype.sum = function() {
  if(this.length == 0) return Error;
  return this.reduce((prev,next)=>prev+next);
};

module.exports = SortedList;
