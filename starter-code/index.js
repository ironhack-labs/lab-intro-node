var SortedList = function () {

  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function (item) {

  this.items.push(item);
  this.items.sort();
  this.length = this.items.length;
};
SortedList.prototype.get = function (pos) {
  
  if (pos >0 || pos < this.items.length) {
    return this.items[pos - 1];
  } //else {
  //   return Error("possition incorrect");
  // }
};
SortedList.prototype.max = function () {

  if (this.items.length > 0) {
    return this.items[this.items.length - 1];
  }
};
SortedList.prototype.min = function () {

  if (this.items.length > 0) {
    return this.items[0];
  }
};
SortedList.prototype.average = function () {

  if (this.items.length > 0) {
    return this.sum() / this.items.length;
  }
};
SortedList.prototype.sum = function () {

  if (this.items.length > 0) {
    return this.items.reduce(function (accumulator, element) {
      return accumulator + element;
    }, 0);
  }
  return Error('the list is empty');
};

module.exports = SortedList;