class SortedList {
    constructor() {
      this.items= [];
      this.length= 0;
    }

    add(item) {
      this.items.push(item);
      this.items.sort((x,y)=> x-y);
      this.length++;
    }
    get(pos) {
      // if(pos-1>this.length) {
      //   throw new Error ("OutOfBounds");
      // } else {
      //   return this.items[pos-1]
      // }
    return this.items[pos]

    }
    max() {
      if(this.length===0) {
        throw new Error("EmptySortedList")
      }
      return Math.max(...this.items);
    }
    min() {
      if(this.length===0) {
        throw new Error("EmptySortedList")
      }
      return Math.min(...this.items); 
    }
    average() {
      if(this.length===0) throw new Error("EmptySortedList")
      return this.sum(this.items)/this.items.length;
    }
    sum() {
      if(this.items.length===0) return 0;
      if(this.items.length===0) return this.items[0];
      return this.items.reduce((acc,n)=> acc+n);
    }
  };
  
  module.exports = SortedList;


  // The average() method should return the average value of the array.

  // The same as above, check the corresponding test to see if there's anything else to be added.