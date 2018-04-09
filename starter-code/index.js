var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add  = function (x) {
  
  this.items.push(x);
  this.items = this.items.sort();
  this.length = this.items.length;
}

SortedList.prototype.get = function(pos) {
  return this.items[pos-1] ;
  
}

SortedList.prototype.max  = function() {
  
  if (this.items === 0) {
   return [];
  
  } else {
     return Math.max.apply(Math, this.items)
  }
}


SortedList.prototype.min     = function() {
  if (this.items === 0) {
    return [];
} else {
  return Math.min.apply(Math, this.items)
}
}
SortedList.prototype.average = function() {

}
SortedList.prototype.sum     = function() {

}

module.exports = SortedList;

var sortedList1 = new SortedList(); 
sortedList1.add() 



