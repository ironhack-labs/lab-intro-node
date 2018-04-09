class SortedList {
  constructor(){
    this.items = []
    this.length = this.items.length
  }
  add(x){
    this.items.push(x)
    this.length = this.items.length
  }
};

// SortedList.prototype.add     = function(x) {
//   if(x < this.items[this.items.length-1]){
//     this.items.unshift(x)
//     this.length++
//   }
//   else{
//     this.items.push(x)
//     this.length++
//   }
// }
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
