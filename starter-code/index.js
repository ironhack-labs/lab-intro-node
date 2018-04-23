var SortedList = function() {
  this.items = [],
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  })
  this.length ++;
}

SortedList.prototype.get     = function(pos) {
  if (pos < 1 || pos > this.length) {
    throw Error ("OutOfBounds");
  }
  return this.items[pos-1];
}

SortedList.prototype.max     = function() {
  return Math.max.apply(Math, this.items);
}

SortedList.prototype.min     = function() {
  return Math.min.apply(Math, this.items);
}

SortedList.prototype.average = function() {
  return this.sum() / this.length;
}

SortedList.prototype.sum     = function() {
  return this.items.reduce(function(sum, a){
    return sum + a
  }, 0)
}


module.exports = SortedList;

var sl = new SortedList();
sl.add(1);
sl.add(2);
sl.add(3);
console.log(sl.sum(), 6);