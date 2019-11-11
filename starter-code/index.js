class SortedList {
    constructor() {
      this.items = [],
      this.length = this.items.length
    }

    add(x) {
      this.items.push(x); 
      this.length++;
      this.items.sort((a,b) => a - b);
    }

    get(pos) {
      if(pos > this.items.length) {throw new Error("OutOfBounds")}
      return this.items[pos]
    }

    max() {
      if(!this.items.length) {throw new Error("EmptySortedList")}
      return Math.max.apply(null, this.items);
    }

    min() {
      if(!this.items.length) {throw new Error("EmptySortedList")}
      return Math.min.apply(null, this.items);
    }

    sum() {
      if(!this.items.length) {return 0}
      return this.items.reduce((ac, cu) => ac+cu);
    }

    average() {
      if(!this.items.length) {throw new Error("EmptySortedList")}
      return this.sum()/this.items.length;
    }
  };
  
  module.exports = SortedList;