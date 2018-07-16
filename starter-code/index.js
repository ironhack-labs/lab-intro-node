var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length++;
  this.items.sort(function(a, b) {
    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  });
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1];
}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
