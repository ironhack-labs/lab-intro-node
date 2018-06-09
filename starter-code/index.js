var SortedList = function () {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function (item) {
  this.item = item;
  this.items.push(this.item);
  this.length=this.items.length;
  this.items.sort(function (a, b) {
    return a - b;
  });
};

SortedList.prototype.get = function (pos) { 
  this.pos = pos-1;
  return this.items[this.pos];
}

SortedList.prototype.max = function () {
  this.items.sort(function (a, b) {
    return a - b;
  });
  return this.items[this.items.length-1];
 };

SortedList.prototype.min = function () { 
  this.items.sort(function (a, b) {
    return a - b;
  });
  return this.items[0];
};

SortedList.prototype.average = function () {
  if (this.items.length > 0) {
    let arraySum = this.items.reduce((accumulator, currentValue)=> accumulator+currentValue);
    let averageValue = arraySum/this.items.length;
    return averageValue;
  }
 };

SortedList.prototype.sum = function () { 
  if (this.items.length > 0) {
    let arraySum = this.items.reduce((accumulator, currentValue)=> accumulator+currentValue);
    return arraySum;
  }
};

module.exports = SortedList;
