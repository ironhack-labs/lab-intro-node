var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length = this.items.length;
}

SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1];
}

SortedList.prototype.max     = function() {
  return Math.max.apply(null, this.items);
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
  var sum = 0;
  for (i=0; i < this.items.length; i++){
    sum += this.items[i];
  }

  return sum/this.items.length;
}
SortedList.prototype.sum     = function() {
  var sum = 0;
  for (i=0; i < this.items.length; i++){
    sum += this.items[i];
  }
  return sum;
}

module.exports = SortedList;
