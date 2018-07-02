var SortedList = function() {
  this.items = [];
  this.length= this.items.length;
};

const sorted = new SortedList();

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length++;
  this.items.sort(function (a, b) {
    return a - b;
  });
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1];
}
SortedList.prototype.max     = function() {
  return Math.max.apply(null, this.items);
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
  
  var sum = 0;
  for( var i = 0; i < this.items.length; i++ ){
    sum += this.items[i]; 
  }
  var avg = sum/this.items.length;
  return avg;
}

SortedList.prototype.sum     = function() {
  var sum = 0;
  for( var i = 0; i < this.items.length; i++ ){
    sum += this.items[i];
  }
  return sum;
}


module.exports = SortedList;
