var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b){
    return a - b;
  });
  this.length++; 
}
// get(20) ==> 19th element in the array because we start from 0
SortedList.prototype.get     = function(pos) {
  return this.items[pos- 1];

}
SortedList.prototype.max     = function() {
  //                  or null  
  //                      |
  return Math.max.apply(Math,this.items);
}
SortedList.prototype.min     = function() {
  //                 or null  
  //                     |
  return Math.min.apply(Math,this.items);
}
SortedList.prototype.average = function() {
  return this.sum()/this.items.length
}
SortedList.prototype.sum     = function() {
  let total = 0;
  for(i=0; i < this.items.length; i++)  {
    total += this.items[i];
  }
  return total;
}

module.exports = SortedList;
