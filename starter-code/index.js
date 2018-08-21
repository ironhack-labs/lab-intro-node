const SortedList = function() {
  this.items = [];

  this.length = function() {
    return this.items.length;
  };
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort((a, b) => {
    return a > b;
  });
};
SortedList.prototype.get = function(pos) {
  if (pos > this.items.length) {
    throw Error("OutOfBounds");
  }
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  if (this.items.length <= 0) {
    throw Error("EmptySortedList");
  }
  return this.items[this.items.length - 1];
};
SortedList.prototype.min = function() {
  if (this.items.length <= 0) {
    throw Error("EmptySortedList");
  }
  return this.items[0];
};
SortedList.prototype.average = function() {
  if (this.items.length <= 0) {
    throw Error("EmptySortedList");
  }

  return this.sum() / this.length();
};
SortedList.prototype.sum = function() {
  if (this.items.length <= 0) {
    throw Error("EmptySortedList");
  }

  return this.items.reduce((acc, cur) => acc + cur);
};

module.exports = SortedList;
