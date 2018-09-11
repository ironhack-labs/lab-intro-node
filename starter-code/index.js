class SortedList {
  constructor() {
    this.items= [];
    this.length = this.items.length;
  }
  add(x) {

    this.items.push(x) ;
    this.items.sort(function(a,b){
      return a-b;
    });
    this.length++;

  }
  get(pos) {
    return this.items[pos-1];

  }
  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    else{
    
   return Math.max(...this.items)
    }
   
  }
  min() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    else{
      return Math.min(...this.items)
    }
  }
  average() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    else {
      return this.sum()/this.items.length;
    }
   
  }
  sum() {
    return this.items.reduce((a,b) => a+b, 0)
  }
};

module.exports = SortedList;
