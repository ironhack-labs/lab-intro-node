function SortedList() {
  this.items = [];
  this.length = this.items.length;
}

SortedList.prototype.add     = function (item) {
  this.items.push(item);
  this.items.sort(function (a, b) {
    return a - b;
  });
  this.length = this.items.length;
};
SortedList.prototype.get     = function (pos) {
  return this.items[pos - 1];
};
SortedList.prototype.max     = function () {
  if (this.items.length === 0) { return 'EmptyList'; }
  var max = this.items[0];
  this.items.forEach(function (item) {
    if (item > max) { max = item; }
  });
  return max;
};
SortedList.prototype.min     = function () {
  if (this.items.length === 0) { return 'EmptyList'; }
  var min = this.items[0];
  this.items.forEach(function (item) {
    if (item < min) { min = item; }
  });
  return min;
};
SortedList.prototype.average = function () {
  if (this.items.length === 0) { return 'EmptySortedList'; }
  return (this.items.reduce(function (a, b) {
    return a + b;
  }) / this.length);
};
SortedList.prototype.sum     = function () {
  if (this.items.length === 0) { return 'EmptySortedList'; }
  return this.items.reduce(function (a, b) {
    return a + b;
  });
};

module.exports = SortedList;
