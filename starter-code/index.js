class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length; 
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a,b)=>{
        return a-b; 
      });
      this.length +=1;
    }
    get(pos) {
      return this.items[pos];
    }
    max() {
      if (this.length ==0){
        throw new Error("EmptySortedList");
      } else {
        return (this.items[this.length-1]);
        // return Math.max(this.items);
      }
    }
    min() {
      if (this.length ==0){
        throw new Error("EmptySortedList");
      } else {
        return (this.items[0]);
      // return Math.min(this.items);
      }
    }

    sum() {
      if (this.length ==0){
        return 0;
      } else {
        let sum = 0; 
       for(let i =0; i<this.length; i++){
          sum += this.items[i];
       }
       return sum;
      }
    }
    average() {
      if (this.length ==0){
        throw new Error("EmptySortedList");
      } else {
      return (this.sum())/this.length;
      }
    }
  }
  
  module.exports = SortedList;