class SortedList {
    constructor() {
      this.items = [],
      this.length = 0
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length++
    }
    get(pos) {
      if (pos > this.length || pos < 0) {
        throw new Error("OutOfBounds")
      } else {
        return this.items[pos]
      }
    }
    max() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else { 
        return Math.max(...this.items)
      }
    } 

    min() {
      if (this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return Math.min(...this.items);
      }
    }
    average() {
      if (this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.sum() / this.length;
      }
    }
    sum() {
      return (this.length === 0) ? 0 : this.items.reduce((acc, num) => acc + num, 0);
    }
  };
  
  module.exports = SortedList;