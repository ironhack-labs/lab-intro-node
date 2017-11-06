var SortedList = function() {
  this.length = [];
};

SortedList.prototype.add     = function(item) {
  this.length.push(item);
}

SortedList.prototype.get     = function(pos) {
  var asc = this.length.sort();
  return asc[pos - 1];
}

SortedList.prototype.max     = function() {
  try {
    return Math.max.apply(null, this.length);
  } catch (e) {
    return 'EmptySortedList';
  }
}

SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.length);
}

SortedList.prototype.average = function() {
  // for(var i=0; i < this.length.length; i++) {
  //   var sum += this.length[i];
  //   var avg = sum / this.length.length;
  // }
  // return avg;
}
SortedList.prototype.sum     = function() {
  // for(var i=0; i < this.length.length; i++) {
  //   var sum += this.length[i];
  // }
  // return sum;
}

module.exports = SortedList;
