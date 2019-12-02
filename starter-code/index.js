class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b){return a - b});
  }

  get(pos) {
    if(pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } 
    return Math.max(...this.items);
  
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } 
    return Math.min(...this.items);
  }

  sum() {
    if (this.length == 0) {
      return 0;
    }
    return this.items.reduce((a, b) => a + b);
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } 
    let sum = this.sum();
    return sum/this.length;
  }
}

module.exports = SortedList;
