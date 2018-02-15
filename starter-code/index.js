var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.unshift(item);
  this.length = this.items.length;
  var result = this.items.sort((a, b) => {return a - b})
  this.items = result;
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1];
}
SortedList.prototype.max     = function() {
  return Math.max.apply(null, this.items);
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items)
}
SortedList.prototype.average = function() {
  var total = this.items.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return total / this.items.length;
}
SortedList.prototype.sum     = function() {
  if (this.items.length > 0) {
    var total = this.items.reduce((sum, num) => {
      return sum + num;
    }, 0);
    return total
  }
  return 0;
}

module.exports = SortedList;

var sl = new SortedList();
sl.add(10)
sl.add(20)
console.log(sl.get(1));
console.log(sl.get(2))