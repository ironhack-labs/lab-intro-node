var SortedList = function(items, length) {
  this.items = [];
  this.length = this.items.length;
  // order of array items is important
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  // sort 
  this.items.sort(function(a,b){ return a-b});
  // look up sort(func a,b)- how it works 
  this.length++;
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
}

SortedList.prototype.max     = function() {
  return this.items[this.length-1];
}
SortedList.prototype.min     = function() {
  return this.items[0];
}
SortedList.prototype.average = function() {
  var sumOne = this.items.reduce(function(acc, value) {
    return acc + value;
  },0);
  return sumOne / this.length;
  // insure syntax of (function(acc,value)) and also 
  // the starting value after function },0);

  // var sum = 0;
  // for(var i =0; i<this.length; i++){
  //   sum+= this.items[i];
  // }
  // return sum / this.length;

}
SortedList.prototype.sum     = function() {
  var sumTwo = this.items.reduce(function(acc, value) {
    return acc + value;
//   var sum = 0;
//   for(var i =0; i<this.length; i++){
//     sum+= this.items[i];
//   }
//   return sum;
  },0);
  return sumTwo;
}

module.exports = SortedList;

// if failing,(i.e) #add (1), (2)- look at the test paramters side by side to see what is being tested