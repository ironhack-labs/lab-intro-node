class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {    
    this.items.push(item); 
    this.items.sort((a,b) => a > b);
    this.length = this.items.length;
  }
  get(pos) {    
    return this.items[pos-1];
  }
  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length-1];
  }
  min() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }
  average() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.items.length;
  }
  sum() {
    return this.items.reduce(function(acc,elem){
      return acc+elem;
    },0);
  }
};

module.exports = SortedList;
