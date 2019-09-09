class SortedList {
    constructor(items,length) {
      this.items=[];
      this.length=0;
    }
    add(item) {
      this.items.push(item);
      this.length=this.items.length;
      this.items.sort((a, b)=> a - b);
    }
    get(pos) {
      if (pos < 0 || pos > this.length) {
        throw new Error("OutOfBounds");
      } 
      return this.items[pos];
      }
    max() {
      if(this.items.length===0){
      throw new Error("EmptySortedList")
      }
      return Math.max(...this.items);
    }
    min() {
      if(this.items.length===0){
        throw new Error("EmptySortedList")
        }
        return Math.min(...this.items);
    }
    average() {
      if(this.length===0) {
      throw new Error("EmptySortedList");
    }
      return this.sum(this.items)/this.items.length;
    }
    sum() {
      return (this.length === 0) ? 0:this.items.reduce((ac,cv)=>ac+cv, 0);
    }
  };
  
  module.exports = SortedList;