

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
   }
  
  
  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      let sorted = this.items.sort((a, b) => a - b);
      return sorted[sorted.length - 1];

    } else {
      throw new Error("EmptySortedList");
    }
      
  }

  min() {
    if (this.length > 0) {
      let sorted = this.items.sort((a, b) => a - b);
      return sorted[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return (this.length > 0) ?  this.items.reduce(reducer) :  0;
  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
    
  }
}

 module.exports = SortedList;

 