class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b);
    this.length++;
  
  }
  get(x) {
    
    this.length = this.items.length;
    return this.items[x-1];
  }
  max() {
    return Math.max(...this.items);
    }

  min() {
    return Math.min(...this.items)
  }
  sum() {
    if (this.length <= 0) return
    return this.items.reduce( (a,b) => a+b)
  }
  average() {
    return this.sum()/this.items.length
  }
}
/* SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {} */

module.exports = SortedList;
