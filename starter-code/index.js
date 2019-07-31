class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
      return this;
    }
    add(item) {
      this.items.push(item)
      this.items.sort();
      this.length++;
    }
    get(pos) {
      return this.items[pos];  
    }
    max() {
      if(!this.length){
         throw new Error("EmptySortedList");
      }else{
        return this.items[this.length - 1];
      }
    }
    min() {
      if(!this.length){
        throw new Error("EmptySortedList");
     }else{
       return this.items[0];
     }
    }
    average() {
      if(!this.length){
        throw new Error("EmptySortedList");
      }
      return (this.items.reduce((total,current) => total + current))/ this.length ;
      
    }
    sum() {
      return  this.length ? this.items.reduce((total,current)=> total + current):0;
    }
  };
  
  module.exports = SortedList;


 