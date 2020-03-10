class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos];
    }
    
    // pos > this.items.length ? {throw new Error("OutOfBounds")} :  this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
      return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
      return Math.min(...this.items);
  }
  

  sum() {

    if (this.length === 0 ) {
      return 0;
    } else {
      return this.items.reduce((accumulator, value) => accumulator + value);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}
module.exports = SortedList;
