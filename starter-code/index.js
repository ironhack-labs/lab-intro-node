var SortedList = function() {
  this.list = [];
  this.length = 0;
};

SortedList.prototype.add = function(index) {
  this.list.push(index);
  this.length++;
  if (this.length > 1) {
    this.list.sort(function(a, b) {
      return a - b;
    });
  }


};

SortedList.prototype.get = function(pos) {
  return this.list[pos - 1];
};


SortedList.prototype.max = function() {
  return this.list[this.list.length - 1];
};
SortedList.prototype.min = function() {
  return this.list[0];
};
SortedList.prototype.average = function() {
  var acum = 0;
  for (var i = 0; i < this.list.length; i++) {
    acum += this.list[i];

  }
  return acum / this.list.length;
};
SortedList.prototype.sum = function() {
  var acum = 0;
  for (var i = 0; i < this.list.length; i++) {
    acum += this.list[i];

  }
  return acum
};

module.exports = SortedList;
