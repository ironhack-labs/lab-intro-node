var SortedList = function () {
  var self = this;

  self.items = [];
  self.length = self.items.length;
};

SortedList.prototype.add = function (item) {
  var self = this;

  self.items.push(item);
  self.length = self.items.length;

  self.items.sort(function (a, b) {
    return a - b;
  });
};

SortedList.prototype.get = function (pos) {
  var self = this;
  return self.items[pos - 1];
};

SortedList.prototype.max = function () {
  var self = this;
  self.max = self.items.reduce(function (a, b) {
    return Math.max(a, b);
  });
};
SortedList.prototype.min = function () {};
SortedList.prototype.average = function () {};
SortedList.prototype.sum = function () {};

module.exports = SortedList;
