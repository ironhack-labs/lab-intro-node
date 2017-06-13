var SortedList = function() {
  this.length = 0;
  this.length = [];
};

SortedList.prototype.add = function(item) {
  this.length.push(item);
  if (item < 100) {
    this.length.sort();
  }
};

SortedList.prototype.get = function(pos) {
  return this.length[pos - 1];
};

SortedList.prototype.max = function() {
  var result = 0;
  for (var i = 0; i < this.length.length ; i++) {
    if (this.length[i] > result) {
      result = this.length[i];
    }
  }
  return result;
}
SortedList.prototype.min = function() {
  var result;
  for (var i = 0; i < this.length.length ; i++) {
    if (i === 0) {
      result = this.length[i];
    }
    if (this.length[i] < result) {
      result = this.length[i];
    }
  }
  return result;
}
SortedList.prototype.average = function() {
  var result = 0;
  for (var i = 0; i < this.length.length ; i++) {
    result += this.length[i];
  }
  return result / this.length.length;
}
SortedList.prototype.sum = function() {
  var result = 0;
  for (var i = 0; i < this.length.length ; i++) {
    result += this.length[i];
  }
  return result;
}

module.exports = SortedList;
