var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add     = function(item) {
  
  if (this.length === 0) {
    this.items.push(item);
  }
  else {
    this.items.push(item);
    this.items.sort(function(a,b) {
      return a - b;
    });      
  }
  this.length++
}

SortedList.prototype.get     = function(pos) {

  if (!this.items[pos - 1]) {
    return "OutOfBounds";
  }
  else {
    return this.items[pos - 1];
  }  
  
}
SortedList.prototype.max     = function() {
  if (!this.items) {
    return "EmptySortedList";
  }
  else {
    return Math.max(...this.items);
  }
}
SortedList.prototype.min     = function() {
  if (!this.items) {
    return "EmptySortedList";
  }
  else {
    return Math.min(...this.items);
  }
}
SortedList.prototype.average = function() {
  if (!this.items) {
    return "EmptySortedList";
  }
  else {    
    return this.sum() / this.length;
  }
}
SortedList.prototype.sum     = function() {
  var accum = 0;
  for (var i = 0; i < this.length; i++) {
    accum += this.items[i];
  }
  return accum;
}

module.exports = SortedList;
