//const 

class SortedList {
  
  constructor(items, length){
    let sorted = new SortedList([], 0);
    /*this.items = items;
    this.length = length;*/
  };

  add(item) {
    this.items.push(item)
  };
  

};

SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
