/*var SortedList = function() {};

SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;*/

class SortedList {
  constructor(){
    this.items = [];
    this.length = 0;
   }

   add(x){
      
      this.items.push(x);
      this.items.sort((a,b) => a-b);
      this.length++
   }

   get(x){
     return this.items[x-1];
   }

   max(){

      return  this.items.length === 0 ? "EmptySortedList" : this.items.reduce((a,b) => Math.max(a,b));

   }

   min(){

      return this.items.length === 0 ? "EmptySortedList" : this.items.reduce((a,b) => Math.min(a,b));


   }

   average(){

      return this.items.length === 0 ? "EmptySortedList" : (this.items.reduce((a,b) => a+b)/this.length);

   }

  sum(){

    return this.items.length === 0 ? "EmptySortedList" : this.items.reduce((a,b) => a+b);
  }

}

module.exports = SortedList;







