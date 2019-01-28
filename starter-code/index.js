class SortedList {
  constructor() {
    this.length = 0;
    this.array = [];
  }
  add(item) {
    this.array.push(item);
    this.array.sort((a,b)=>{
      return a-b;
    });
    this.length++;
  }
  get(pos) {
    if (pos > this.length) {
      return new Error("OutOfBounds");
    }
    return this.array[pos - 1];
  }
  max() {
    if(this.array.length===0){
      throw new Error("EmptySortedList")
    } else{
      const max = this.array.reduce((accumulator, currentValue)=>{
        return Math.max(accumulator,currentValue);
      },-Infinity);
      return max;
    }
  }
  min() { 
    if(this.array.length===0){
      throw new Error("EmptySortedList")
    } else{
      const min = this.array.reduce((accumulator, currentValue)=>{
        return Math.min(accumulator,currentValue);
      },Infinity);
      return min;
    }
  }
  average() {
    if(this.array.length===0){
      throw new Error("EmptySortedList")
    } else{
      return this.sum()/this.length;
    }
   }
  sum() { 
    if(this.array.length===0){
      return 0;
    } else{
      const sum = this.array.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue;
      },0);
      return sum;
    }
  }
};

module.exports = SortedList;
