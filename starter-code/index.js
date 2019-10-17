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
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;