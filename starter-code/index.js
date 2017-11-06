var SortedList = function() {
  this.list = [];
  this.length = this.list.length;
};

SortedList.prototype.add  = function(item) {
  this.list.push(item);
  this.list.sort(function(a,b) { return a-b});
  this.length++;
}
SortedList.prototype.get     = function(pos) {
  return this.list.length < pos ? "OutOfBounds" : this.list[pos - 1];
}
SortedList.prototype.max = function() {
  if(this.list.length == 0) return 'EmptySortedList';
  return Math.max(...this.list);
}
SortedList.prototype.min = function() {
  if(this.list.length == 0) return 'EmptySortedList';
  return Math.min(...this.list);
}
SortedList.prototype.average = function() {
  if(this.list.length == 0) return 'EmptySortedList';
  let suma = this.sum();
  return suma / this.length;
}
SortedList.prototype.sum     = function() {
  if(this.list.length == 0) return 'EmptySortedList';
  let suma = this.list.reduce(function(sum, e) {
    return sum + e;
  })
  return suma;
}

module.exports = SortedList;
