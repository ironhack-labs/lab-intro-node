class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b)=> a - b);
    }
    get(pos) {
    if (pos > this.length || pos < 0) {
      throw new Error("OutOfBounds")
    } return this.items[pos];
    }
    max() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } return Math.max(...this.items)
    }
    min() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } return Math.min(...this.items) 
    }
    average() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {return this.sum(this.items)/this.items.length}
    }
    sum() {
      if (this.length === 0) {
        return 0;
      } else { return this.items.reduce((ac,cv)=>ac+cv, 0)}
    }
  }; 
  
  module.exports = SortedList;