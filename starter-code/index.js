var SortedList = function () {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function (item) {

  this.items.push(item);
  this.length = this.items.length;
  this.items.sort(function (a, b) {
    return a - b;
  });
};

SortedList.prototype.get = function (pos) {
  return this.items[pos - 1];
}

SortedList.prototype.max = function () {
  //return this.items[this.length - 1]
  return Math.max(...this.items);
}

SortedList.prototype.min = function () {
  return this.items[0]
}

SortedList.prototype.average = function () {
  return this.items.length > 0 ? this.items.reduce(function (a, b) { return a + b }) / this.length : [];

}

SortedList.prototype.sum = function () {
  return this.items.length > 0 ? this.items.reduce(function (a, b) { return a + b }) : [];
}

module.exports = SortedList;
