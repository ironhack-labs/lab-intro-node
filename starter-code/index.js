var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
 this.items.push(item);
 this.items.sort(function(a, b) {
      return a - b;
  });
  this.length = this.items.length;
   };

SortedList.prototype.get     = function(pos) {
  if (pos>this.length){
    return "OutOfBounds";
  } else {
    return this.items[pos-1];
  }
}
SortedList.prototype.max     = function() {
  return Math.max(...this.items);
}

SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items)
}

SortedList.prototype.average = function() {
  if(this.length === 0) {
    return "EmptySortedList";
  } else {
  let sum = this.items.reduce((previous, current) => current += previous);
  return sum / this.items.length;
  }
}

SortedList.prototype.sum     = function() {
  if(this.length === 0) {
    return "EmptySortedList";
  } else {
  return this.items.reduce((previous, current) => current += previous);
}
}

module.exports = SortedList;
