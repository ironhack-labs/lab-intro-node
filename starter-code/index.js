var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);

  this.items.sort(function(a, b) {
    return a - b;
  });
  // return this.items;
  this.length++;
};

SortedList.prototype.get = function(pos) {
  // if(pos < 1 || pos > this.length){
  //   throw Error("OutOfBounds");
  // }
  return this.items[pos - 1];
};

SortedList.prototype.max = function() {
  // return this.pos[items - 1];
  // return this.items[this.length]
  return Math.max.apply(null, this.items);
};

SortedList.prototype.min = function() {
  return Math.min.apply(null, this.items);
};

SortedList.prototype.average = function() {
  return this.items.reduce((a, b) => a + b, 0) / this.items.length;
};

SortedList.prototype.sum = function() {
  return this.items.reduce(function(a, b) {
    return a + b;
  }, 0);
};

module.exports = SortedList;
