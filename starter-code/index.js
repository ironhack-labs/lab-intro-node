class SortedList {
    constructor() {
      this.length = 0;
      this.items = [];
    }
    add(x) {
      this.items.push(x);
      this.items.sort(function(a, b){return a-b});
       this.length += 1
    }
    get(pos) {
     return this.items[pos]
    }
    max() {
     if(!this.length){throw new Error("EmptySortedList")}else{
       return Math.max(...this.items)
     }
     ;

    }
    min() {
      if(!this.length){throw new Error("EmptySortedList")}else{
        return Math.min(...this.items)
      }
      ;

    }
    average() {
      if(!this.length){
      throw new Error("EmptySortedList");
      }else{
      return this.items.reduce((a,b) => a+b) / this.length
    }}
    sum() {
      return (this.length) ? this.items.reduce((a,b) => a+b) : 0;
    }
  };
  
  module.exports = SortedList;