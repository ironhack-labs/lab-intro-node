var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a,b){
    return a - b;
});
this.length = this.items.length;
}

SortedList.prototype.get = function(pos) {
  return this.items[pos-1];
}
SortedList.prototype.max = function() {
  return Math.max.apply(null, this.items);
}
SortedList.prototype.min = function() {
  return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
  if(this.length == 0){
    throw new Error("EmptySortedList");
  }
  return this.sum()/ this.length;
}
SortedList.prototype.sum = function() {
  if(this.length == 0){
    throw new Error("EmptySortedList");
  }
  return this.items.reduce(function(total, item){
    return total + item;
  });
}

module.exports = SortedList;