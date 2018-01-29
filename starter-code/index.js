// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}


class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x){
    this.items.push(x);
    this.items.sort(function(a,b){
        return a-b;
    })
    this.length++;   
  }
  get(x){
      return this.items[x-1]; 
  }
  max(){
    if(this.length===0){
          return "EmptySortedList";
    } 
    else{
    //  this.items.reduce (function (a,b){
    //    return Math.max(a-b);
    return (this.items[this.length-1]);
     }
 }     
  
  min(){
    if(this.length===0){
        return "EmptySortedList";
  } 
    else{
        return (this.items[0]);
}
  }    
  average(){
    let av= this.items.reduce ((a,b)=> a+b, 0)/this.length;
    return av;

  }
  sum(){ 
    let suma= this.items.reduce ((a,b)=> a+b, 0);
    return suma;

  }
  }
module.exports = SortedList;




