class SortedList {
    constructor() {
      this.items = [],
      this.length = this.items.length
    };
    add(item) {
      this.items.push(item);
      this.length = this.items.length;

      return this.items.sort((a, b)=>{
          return a - b;
      }); 
    }
    get(pos) {
        return this.items[pos];
    }
    max() {
      try{
        var max = this.items.reduce(function(a, b) {
          return Math.max(a, b);
      });
      return max;
    } catch(error){
      throw new Error("EmptySortedList");
      };
  };
    min() {
      try{
        var min = this.items.reduce(function(a, b) {
          return Math.min(a, b);
      });
      return min;
    } catch(error){
      throw new Error("EmptySortedList");
      };
  };
    average() {
      if(!this.length == 0){
        return this.sum() / this.length;
      }else {
        throw new Error("EmptySortedList");  
      }
    }
    sum() {
      let sum =  this.items.reduce((accumulator, currentValue)=>{
        return accumulator + currentValue;
      }, 0);
      return sum;
    }
  };
  
  module.exports = SortedList;