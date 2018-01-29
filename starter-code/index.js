function SortedList() {
  this.items = [];
  this.length = 0;
}

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length++;
};

SortedList.prototype.get = function(number) {
  return this.items[number - 1];
};
SortedList.prototype.max = function() {
  return this.items[this.items.length - 1];
};

SortedList.prototype.min = function() {
  return this.items[0];
};
SortedList.prototype.average = function() {
  return (
    this.items.reduce(function(a, b) {
      return a + b;
    }, 0) / this.length
  );
};

SortedList.prototype.sum = function() {
  return this.items.reduce(function(a, b) {
    return a + b;
  }, 0);
};

module.exports = SortedList;
