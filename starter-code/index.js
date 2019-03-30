var SortedList = function() {
  this.length = 0;
  this.items = [];
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a,b) {
    return a-b;
  });
  this.length++;
}

SortedList.prototype.get = function(pos) {
  if (pos<1 || pos > this.length) {
    throw new Error('OutOfBounds');
  }
  return this.items[pos-1];
}

SortedList.prototype.max = function() {
  if (this.length === 0) {
    throw new Error('EmptySortedList');
  }
  return Math.max.apply(Math, this.items);
}

SortedList.prototype.min = function() {
  if (this.length === 0) {
    throw new Error('EmptySortedList');
  }
  return Math.min.apply(Math, this.items);
}

SortedList.prototype.average = function() {
  return (this.sum() / this.length);
}

SortedList.prototype.sum = function() {
  if (this.items.length === 0) {
    throw new Error('EmptySortedList');
  }
  return this.items.reduce(function(sum, ele){
    return sum + ele;
  }, 0);
}

module.exports = SortedList;