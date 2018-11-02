

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

  
  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.array.reduce((a, b) => a + b);

  }

  average() {

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } 
    else {
    return this.sum() / this.length;
    }
  }

 
}

 


module.exports = SortedList;


