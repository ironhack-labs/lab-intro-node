
// SortedList.prototype.add = function (item) {};
// SortedList.prototype.get = function (pos) {};
// SortedList.prototype.max = function () {};
// SortedList.prototype.min = function () {};
// SortedList.prototype.average = function () {};
// SortedList.prototype.sum = function () {};

class SortedList {
  constructor () {
    this.items = [];
    this.length = this.items.length;
  };

  add (x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort((a, b) => { return a - b; });
  };

  get (i) {
    return this.items[ i - 1 ];
  };

  max () {
    return Math.max(...this.items);
  };

  min () {
    return Math.min(...this.items);
  };

  average () {
    return this.items.length === 0 ? [] : this.items.reduce((acc, items) => acc + items) / this.items.length;
  };

  sum () {
    return this.items.length === 0 ? [] : this.items.reduce((acc, items) => acc + items);
  };
}

module.exports = SortedList;
