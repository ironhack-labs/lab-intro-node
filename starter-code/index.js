var SortedList = function () {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function (item) {
  this.items.push(item);
  this.items.sort(function (a, b) {
    return a - b;
  });
  this.length = this.items.length;
};

SortedList.prototype.get = function (pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max = function () {
  this.length = this.items.length;
  if (this.length === 0) {
    return "EmptySortedList";
  } else {
    var max = this.items.reduce(function (a, b) {
      return Math.max(a, b);
    });
    return max;
  }
};
SortedList.prototype.min = function () {
  this.length = this.items.length;
  if (this.length === 0) {
    return "EmptySortedList";
  } else {
    var min = this.items.reduce(function (a, b) {
      return Math.min(a, b);
    });
    return min;
  }
};
SortedList.prototype.average = function () {
  if (this.length !== 0) {
    return this.sum() / this.length;
  } else {
    return undefined;
  }
};
SortedList.prototype.sum = function () {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this.items[i];
  }
  return sum;
};

module.exports = SortedList;
