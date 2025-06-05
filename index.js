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
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    // return Math.max(...this.items)
    const max = this.items.reduce((a, b) => Math.max(a, b), -Infinity);
    return max;
  }

  min() {
       if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    // return Math.min(...this.items) //Not  good for an array with too many  elements
    return this.items.reduce((a, b) => Math.min(a, b), Infinity);
  }

  sum() {
    return this.items.reduce((acc , currVal) => acc + currVal, 0)
  }

  avg() {
     if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
const sum = this.items.reduce((acc, currVal) => acc + currVal, 0)
return sum/this.items.length

  }
}

module.exports = SortedList;
