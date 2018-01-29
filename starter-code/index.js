// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}


class SortedList {
    constructor() {
        this.items = [];
        this.length = 0
    }
    add(item) {
      this.items.push(item);
      this.length++;
      this.items.sort((a, b) => (a - b));
    }
    get (ind, length) {
      return this.items[ind-1];
    }
    max () {
      return this.items.sort((a, b) => (a - b))[this.length - 1];
    }
    min (){
       return this.items.sort((a, b) => (a - b))[0];
    }
    average() {
      if (this.length !== 0) {
        return ((this.items.reduce((total, acc) => total + acc)) / this.length)
      }
    }
    sum () {
      if (this.length !== 0) {
      return this.items.reduce((total, acc) => total + acc);
    }
  }
}

module.exports = SortedList;