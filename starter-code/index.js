var SortedList = function (items, length) {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function (items) {
  this.items.push(items);
  this.items.sort((a, b) => {
    return a - b;
  })
  this.length++;

}

SortedList.prototype.get = function (pos) {
  return this.items[pos - 1];
}


SortedList.prototype.max = function (items) {
  return Math.max(...this.items);
}


SortedList.prototype.min = function () {
  return Math.min(...this.items);
}
SortedList.prototype.average = function (items) {
  var total = 0;
  for (var i = 0; i < this.items.length; i++) {
    total += this.items[i];
  } return total / this.length;
}
SortedList.prototype.sum = function () {
  if (this.items.length == 0) {
    throw Error("EmptySortedList")
  } else {
    var total = this.items.reduce(function (sum, amount) {
      return sum + amount
    });
    return total;
  }
}

module.exports = SortedList;
