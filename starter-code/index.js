var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length = this.items.length;
  this.items.sort();
}
SortedList.prototype.get     = function(pos) {
  if (pos < items.length){
    return this.items[pos];
  } else return "OutofBonds";
}
SortedList.prototype.max     = function() {
  return Math.max(...this.items);
}
SortedList.prototype.min     = function() {
  return Math.min(...this.items);
}
SortedList.prototype.average = function() {
  return this.items.length > 0 ? this.items.reduce(function(a, b) {
    return a + b;
  }) / this.length : []; 
}
SortedList.prototype.sum     = function() {
return this.items.length > 0 ? this.items.reduce(function(a, b) {
  return a + b;
}) : []; 
}

module.exports = SortedList;
var items = new SortedList();

items.add(3);
items.add(20);
items.add(0);
items.get(1);
items.max();
items.min();
items.average();
items.sum();
