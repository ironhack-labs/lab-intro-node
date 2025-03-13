class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item); 
    this.length = this.items.length; 
    this.items.sort((a, b) => a - b);

  }

  get(pos) {
   if (this.items[pos] > 0){
     return this.items[pos];
   }else{
    throw new Error("OutOfBounds");
   }     
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
    if (this.items.length > 0){
      const sum = this.items.reduce((acc, curr) => acc + curr, 0);
      return sum;
  } else {
      return 0;
  }
}

  avg() {
    if (this.items.length === 0){
      throw new Error("OutOfBounds");
    }
    const sum = this.items.reduce((acc, curr) => acc + curr, 0);
    return sum / this.items.length;
  }
}

module.exports = SortedList;
