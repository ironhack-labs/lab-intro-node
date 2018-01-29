// / SortedList.prototype.get = function (pos) {};
// SortedList.prototype.max = function () {};
// SortedList.prototype.min = function () {};
// SortedList.prototype.average = function () {};
// SortedList.prototype.sum = function () {};

class SortedList {
  constructor () {
    this.items = [];
    this.length = this.items.length;
  }
  add (item) {
    this.items.push(item);
    this.length++;
  }
}

module.exports = SortedList;
