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
    return this.items[pos-1];
  }
  max() {
    if(this.length) return this.items[this.length-1];
    
    throw new Error("EmptySortedList")
  }
  min() {
    if(this.length) return this.items[0];
    
    throw new Error("EmptySortedList")
  }
  average() {
    if(this.length) return this.sum()/this.length;
    
    throw new Error("EmptySortedList")
  }
  sum() {
    return this.length ? this.items.reduce((a, b = 0) => a + b) : 0;
  }
};

module.exports = SortedList;