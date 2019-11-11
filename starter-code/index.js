class SortedList {
  constructor(item,pos) {
    this.items = [];
    this.length = this.items.length;
    }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a,b) => (a-b))
    }
  get(pos) {
    
return pos > this.items.length ?  "OutOfBounds" : this.items[pos]
     

    // if (pos > this.items.length) {
    //     return "OutOfBounds";
    // } else {
    //   return this.items[pos]
      
    }
    
    
  max() {
    // this.items.length === 0 --> !this.items.length 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1]
    }

    }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
     
      return this.items[0]
      
    }
      
    }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b) / this.items.length
      // this.sum() / this.items.length  --> mejor
    }
  }
    sum() {
      if (this.items.length === 0) {
        return 0;
      } else {
      return this.items.reduce((a, b) => a + b);
      }
    }
  };
  
  module.exports = SortedList;