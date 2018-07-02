var SortedList = function() {
  this.items = []
  this.length = this.items.length
};

SortedList.prototype.add     = function(item) {
  this.items.push(item)
  this.length = this.items.length
  this.items.sort(function (elemento1, elemento2) {
    return elemento1 - elemento2
  });
};

SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1]
}

SortedList.prototype.max     = function() {
  return this.get(this.length)
}
SortedList.prototype.min     = function() {
  return this.get(1)
}
SortedList.prototype.average = function() {
  return this.sum() / this.length;
}
SortedList.prototype.sum     = function() {
  return this.items.reduce(function(acc, e) {
    return acc + e;
  }, 0);
}

module.exports = SortedList;
