var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function(a, b) {
    return a - b;
  });
};
SortedList.prototype.get = function(pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  return (maxVal = this.items[this.items.length - 1]);
};
SortedList.prototype.min = function() {
  return (minVal = this.items[0]);
};
SortedList.prototype.average = function() {
    if (this.items ==0){
        return "EmptySortedList"
    } else{
  var sum = this.items.reduce(function(a, b) {
    return a + b;
  });
  var avg = sum / this.items.length;
  return avg;
}
};
SortedList.prototype.sum = function() {
    if (this.items == 0){
        return "EmptySortedList"
    } else{
  var sum = this.items.reduce(function(a, b) {
    return a + b;
  });
}
return sum;
};

module.exports = SortedList;
