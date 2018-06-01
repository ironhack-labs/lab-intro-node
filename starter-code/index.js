var SortedList = function() {
  // this.items = items;
  this.length = [];
};

SortedList.prototype.add     = function(item) {
  this.length.push(item);
  // this.length.sort(function(a,b) {
  //   return a - b;
  // });
};
SortedList.prototype.get     = function(pos) {
  return this.length[pos - 1];
}
SortedList.prototype.max     = function() {
  return Math.max.apply(null, this.length);
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.length);
}
SortedList.prototype.average = function() {
  let sum = this.length.reduce(function(a,b){
    return a+b}, 0);
  return sum/this.length.length;
}
SortedList.prototype.sum     = function() {
  return this.length.reduce(function(a,b){
    return a+b}, 0);
}

module.exports = SortedList;
