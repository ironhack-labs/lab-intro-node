class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item)
    this.items.sort(function(a, b) {return a-b} )
  }

  get(pos) {
    if (this.items[pos] == undefined) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.sort(function(a, b) {return b-a} )[0]
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.sort(function(a, b) {return a-b} )[0]
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, curr) => acc + curr)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } 
    return this.sum() / this.items.length
  }
} 

module.exports = SortedList;
