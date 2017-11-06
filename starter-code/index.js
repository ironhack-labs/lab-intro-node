function SortedList() {
};

SortedList.prototype = Object.create(Array.prototype);

SortedList.prototype.add     = function(item) {
  this.push(item);
}
SortedList.prototype.get     = function(pos) {
  return this.sort((a, b) => a - b )[pos - 1];
}

SortedList.prototype.max     = function() {
  if (this.length == 0){
    throw Error('EmptySortedList')
  }
  return this[this.length - 1];
}

SortedList.prototype.min     = function() {
  if (this.length == 0) {
    throw Error('EmptySortedList')
  }
  return this[0];
}

SortedList.prototype.average = function() {
  if (this.length == 0){
    throw Error('EmptySortedList')
  }
  return this.reduce((a, b) => a + b)/this.length;
}

SortedList.prototype.sum     = function() {
  if (this.length == 0 ){
    throw Error('EmptySortedList')
  }
 return this.reduce((a, b) => a + b);
}

module.exports = SortedList;
