class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  };

add(item) {

this.items.push(item);
this.items.sort((a,b)=> a-b);
this.length = this.items.length;

  };
  
  get(pos) {
    if (this.items.length === 0) {
      throw new Error("OutOfBounds");
    }
           return this.items[pos];
      }
      
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList") 
    }
  return Math.max(...this.items);

  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.min = Math.min(...this.items);
  }

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) => a + b) / this.items.length;  
  }
  
  sum() {
    if (this.items.length === 0){
      return 0;
    } else {
   return  this.sum = this.items.reduce((a, b) => a + b, 0);
    }
  }
  
};

module.exports = SortedList;