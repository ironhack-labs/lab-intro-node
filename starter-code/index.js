class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort();
  }
  get(pos) {
    
    return this.items[pos -1];
  }
  max() {
    if(this.items.length == 0) {throw new Error("EmptySortedList")}
    return this.items[this.items.length-1]
  }
  min() {
    if(this.items.length == 0) {throw new Error("EmptySortedList")}
    return this.items[0];
  }
  average() {
    if(this.items.length == 0) {throw new Error("EmptySortedList")}
    return this.sum() / this.length
  }
  sum() {
    return this.items.reduce((acc, val) => {
      return acc+val
    },0)
  }
};

module.exports = SortedList;
