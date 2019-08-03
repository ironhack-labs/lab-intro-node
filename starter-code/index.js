class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a,b) => { 
        return a - b
      });
      this.length = this.items.length;
    }
    get(pos) {
      if (pos >= this.length){
        throw new Error("OutOfBounds");
      } else {
      return this.items[pos];
      }
    }
    max() {
      if (this.length > 0){
        let theMax = 0;
        this.items.forEach((item) => {
          if (item > theMax){
            theMax = item;
          }          
        });
        return theMax;
      } else {
        throw new Error("EmptySortedList");
      }
    }
    min() {
      if (this.length > 0){
        let theMin = this.items[0];
        this.items.forEach((item) => {
          if (item < theMin){
            theMin = item;
          }          
        });
        return theMin;
      } else {
        throw new Error("EmptySortedList");
      }
    }
    average() {
      let theAverage;
      if (this.length === 0){
        throw new Error("EmptySortedList");
      } else {
        let theSum = this.items.reduce((accumulator,currentValue) => {
          return accumulator + currentValue;
        });
        theAverage = theSum/this.length;
      }
      return theAverage;
    }
    sum() {
      let theSum;
      if (this.length === 0){
        theSum = 0;
      } else {
        theSum = this.items.reduce((accumulator,currentValue) => {
          return accumulator + currentValue;
        });
        }
      return theSum;  
    }
  };

  
  module.exports = SortedList;