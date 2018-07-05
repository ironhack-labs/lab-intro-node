var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b){
    return a - b;
  });
  this.length = this.items.length;
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
}
SortedList.prototype.max     = function() {
  return Math.max(...this.items);
  //Math.max(this.items) da resultado NaN
  //Solo coge números y como yo le paso una array (aunque sea de números) not work
  //-> documentación! Spread operator ...
}
SortedList.prototype.min     = function() {
  return Math.min(...this.items);
}
SortedList.prototype.average = function() {
  return this.sum()/this.items.length;
}

SortedList.prototype.sum     = function() {
  return this.items.reduce((accumulator, current)=>accumulator + current,0)
}

module.exports = SortedList;