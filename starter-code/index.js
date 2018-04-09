var SortedList = function() {
  this.item = [];
  this.length = this.item.length;
};

SortedList.prototype.add = function(item) {

  this.item.push(item);
  this.item.sort(function (a,b) {
    return a-b;
  });
  this.length = this.item.length;
}

SortedList.prototype.get = function(pos) {
  return this.item[pos-1];
}


SortedList.prototype.max = function() {
  let max = this.item[0];
  this.item.forEach(function (element) {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

SortedList.prototype.min = function() {
  let min = this.item[0];
  this.item.forEach(function(element) {
    if (element < min) {
      min = element;
    }
  });
  return min;
}

SortedList.prototype.average = function() {
  return this.sum()/this.length
}
 

SortedList.prototype.sum = function() {
  return this.item.reduce(function (acc, curr) {
    return acc+=curr;
  }, 0)

}

module.exports = SortedList;
