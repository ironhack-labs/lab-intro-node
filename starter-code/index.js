class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item){
       this.items.push(item);
       this.length++;
      
    }
    get(pos){
      if(pos > this.length){
        return new Error("The position is Out of Bounds")
        
      } else{
        return this.items[pos];
      }
      
    }
    max(){
      if(this.length === 0){
        throw new Error("EmptySortedList")
      } else {
        return Math.max(...this.items)
      }

    }
    min(){
      if(this.length === 0){
        throw new Error("EmptySortedList")
      } else {
        return Math.min(...this.items)
      }
    }
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;