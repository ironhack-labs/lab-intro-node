// function SortedList() {
//   this.items = [];
//   this.length = this.items.length;
// }

var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};


SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length = this.items.length;
};
SortedList.prototype.get = function(pos) {
  try {
    if (typeof this.items[pos - 1] === 'undefined') throw '/OutOfBounds/';
  } catch (e) {
    e.message = "OutOfBounds";
  } finally {
    return this.items[pos - 1];
  }
};
SortedList.prototype.max = function() {
  return this.items[this.length - 1];
};
SortedList.prototype.min = function() {
  return this.items[0];
};
SortedList.prototype.average = function() {
  try {
    sum = this.items.reduce(function(a, b) {
      return a + b;
    });
  } catch (e) {
    throw "Reduce of empty array with no initial value";
  } finally {
    sum = this.items.reduce(function(a, b) {
      return a + b;
    });
    return sum / this.length;
  }

};
SortedList.prototype.sum = function() {
  try {
    sum = 0;
    for (var i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
  } catch (e) {
    throw "EmptySortedList";
  } finally {
    return sum;
  }
  // return this.items.reduce(function(a, b) {
  //   return a + b;
  // });
};

module.exports = SortedList;
