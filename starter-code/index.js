class SortedList {
  // constructor() {}
  // add(item) {}
  // get(pos) {}
  // max() {}
  // min() {}
  // average() {}
  // sum() {}

  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
  }

  get(pos) {
    return this.items[pos-1];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items);
    }
  }
  
    sum() {
      return this.items.reduce(function(a, b) { return a + b; }, 0)
    }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length;
    }
  }


};


module.exports = SortedList;
