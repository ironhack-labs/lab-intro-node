

class SortedList {
  constructor() {
    this.array = [];
    this.length = this.array.length;
  }
  add(item) {
    this.length++;
    this.array.push(item);
    return this.array.sort((a, b ) => {
      return a - b; 
    });
  };
  
  get(pos) {
        return this.array[pos - 1];
  }

 
  
  max() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.array);
    
  }

 
  min() { 
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.array);
    
  }

  average() {

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.sum() / this.length;
  }
  
  sum() {
    if (this.length === 0) {
      return 0;
    }
    let sum = this.items.reduce((a, b) => a + b);
    return a;
  }
 
}

 


module.exports = SortedList;


