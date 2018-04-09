/*var SortedList = function() {};

SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;*/

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b)
    this.length = this.items.length;
    return this.items;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    return Math.max(...this.items);
  }
  min() {
    return Math.min(...this.items);
  }
  average() {
    return this.items.reduce((cont, val) => cont + val, 0) / this.length;
  }
  sum() {
    return this.items.reduce((cont, val) => cont + val, 0);
  }
}

module.exports = SortedList;
