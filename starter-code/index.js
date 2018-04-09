class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(x) {
    this.items.push(x);
    this.length++;
    return this.items.sort((a, b) => a - b);
  }
  get(nth) {
    return this.items[nth - 1];
  }
  max() {
    return this.items[this.length - 1];
  }
  min() {
    return this.items[0];
  }
  average() {
    return (
      this.items.reduce((acumulador, e) => acumulador + e, 0) / this.length
    );
  }
  sum() {
      return this.items.reduce((acumulador, e) => acumulador + e, 0);
  }
}

// SortedList.prototype.add = function(item) {};
// SortedList.prototype.get = function(pos) {};
// SortedList.prototype.max = function() {};
// SortedList.prototype.min = function() {};
// SortedList.prototype.average = function() {};
// SortedList.prototype.sum = function() {};

module.exports = SortedList;

