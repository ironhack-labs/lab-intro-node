class SortedList {
    constructor(items) {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort( (a,b) => a-b);
      this.length = this.items.length;
      
    }
    get(pos) {
      if(pos > this.length){
        throw new Error("OutOfBounds");
      }
      return this.items[pos];
    }
    max() {
      
      if(this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      return Math.max(...this.items);

    }
    min() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      return Math.min(...this.items);
    }
    average() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList");
      }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sum = this.items.reduce(reducer);
      let avg = sum/this.items.length;
      return avg;
    }
    sum() {
      if(this.items.length === 0){
        return 0;
      }
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer);
    }
  };
  module.exports = SortedList;