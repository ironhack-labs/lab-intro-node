class SortedList {
    constructor() {
      this.items=[],
      this.length=this.items.length
    }
    add(item) {

      this.items.push(item);
      this.items.sort((a,b)=>{return a - b;});
      this.length=this.items.length;
    }
    get(pos) {
      if(pos<this.items.length && pos>=0) return this.items[pos];
    }
      
    max(array) {
    if (this.items.length === 0) {
     throw new Error('EmptySortedList');
   }
   return Math.max(...this.items);

    }
    min() {
      if (this.items.length === 0) {
        throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
    }
    average() {
      if (this.items.length === 0) {
        throw new Error('EmptySortedList');
    }
      let sum=this.items.reduce(function(acumulator,value){
        return (acumulator+value)
      },0)
      return sum/this.length;
    }
    sum() {
      if (this.items.length === 0) {
        return 0;
    }
      let sum=this.items.reduce((acumulator,value)=>{
        return acumulator+value;
      },0)
      return sum;
    }
  };
  let sortedlist= new SortedList();
  module.exports = SortedList;