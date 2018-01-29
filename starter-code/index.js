/*

var SortedList = function() {};

SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}
*/

class SortedList{
  constructor (){
    this.item = [];
    this.length = 0;

  }

  add(item){
    this.item.push(item);
    this.length = this.item.length;
    this.item.sort((a, b) => a - b);
  }

  get(pos) {
    
     return this.item[pos-1];
    
  }

  max(){
    return Math.max(...this.item);
  }

  min(){
    return Math.min(...this.item);
  }

  average(){
    return this.sum()/this.item.length;
  }
  
  sum(){
    if(this.length === 0){
      return "EmptySortedList";
    }
    return this.item.reduce((accumulator, currentValue) => accumulator + currentValue);
  }


}





module.exports = SortedList;

