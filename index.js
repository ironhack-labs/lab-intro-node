class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length++;
  }
  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }
  max() {
    if (this.items.length > 0){
      const highest = Math.max(...this.items);
      return highest;
    }else{
     throw new Error("OutOfBounds");
    }  
  }

  min() {
    if (this.items.length > 0){
      const highest = Math.min(...this.items);
      return highest;
    }else{
     throw new Error("OutOfBounds");
    }  

  }

  sum() {
    if (this.items.length >0){
      
      const sum= this.items.reduce((accumulator, currentValue)=> accumulator+ currentValue, 0)
    return sum;
    } else {
      return 0;
     }  
    
  }

  avg() {
    if (this.items.length >0){
      
      const sum= this.items.reduce((accumulator, currentValue)=> accumulator+ currentValue, 0)
    const average= sum/this.items.length;
    return average;
    } else {
      throw new Error("OutOfBounds");
     }  
      
  }
}

module.exports = SortedList;
