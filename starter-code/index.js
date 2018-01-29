// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

// module.exports = SortedList;

class SortedList {
  constructor(){
    this.items = [],
    this.length = 0
  }
  add(el){
    this.items.push(el);
    this.items.sort((a,b) => a-b);
    this.length++;
  };
  get(i){
    return this.items[i - 1];
  };
  max(){
    return Math.max(...this.items);
  }
  min(){
    return Math.min(...this.items);
  };
  average(){
    return this.items.reduce((acc,e) => acc + e ,0) / this.items.length;
  };
  sum(){
    return this.items.reduce((acc,e) => acc + e ,0); 
  };
}

module.exports = SortedList;