// var SortedList = function() {};

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

add(x) {
  this.items.push(x);
  this.items.sort();
  this.length = this.items.length;
  }

  get(n) {
    return this.items[n - 1];
  }

  max() {
    return this.items[this.length - 1];
  }

  min() {
    return this.items[0];
  }

  average() {
    if(this.length <= 0)
      return 0;

      return this.items.sum() / this.length;
  }
}
// const sl = new SortedList ();


// SortedList.prototype.add = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;

