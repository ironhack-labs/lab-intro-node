function SortedList () {
  this.length = [];
};

SortedList.prototype.add = function(item) {
  this.length.push(item);
  this.length.sort(function(a,b){return a-b});
};

SortedList.prototype.get = function(pos) {
  if(this.length.length < pos) return "OutOfBounds"
  return this.length[pos-1];
};

SortedList.prototype.max  = function() {
  if(this.length.length == 0) return 'EmptySortedList';
  return Math.max(...this.length);
};

SortedList.prototype.min = function() {
  if(this.length.length == 0) return 'EmptySortedList';
  return Math.min(...this.length);
};

SortedList.prototype.average = function() {
  if(this.length.length == 0) return 'EmptySortedList';
  return (this.length.reduce((prev,next) => prev+next) / this.length.length);
};

SortedList.prototype.sum = function() {
  if(this.length.length == 0) return 'EmptySortedList';
  return this.length.reduce((prev,next) => prev+next);
};

module.exports = SortedList;
