// var SortedList = function() {};

/*

problem break down for 1:

Constructor
new SortedList should create a new object from the SortedList class.

The object should have a items and length property.

items should be an array.
length should be the number of elements in the array.
*/



class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;     
  }


  //Need help with both add and get methods.
add(x) {
  this.items.push(x);
  this.items.sort();
  this.length = this.items.length;
}

get(x) {
  return this.items[x - 1];
}




} //END Sorted List Class

let blah = new SortedList();

// blah.add(y);

// SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
