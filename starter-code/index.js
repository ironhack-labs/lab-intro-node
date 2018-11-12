class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => { return a - b });
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) { throw new Error("EmptySortedList")};
    return this.items[this.length-1];
  }
  min() {
    if (this.length === 0) { throw new Error("EmptySortedList")};
    return this.items[0];
   }
  average() {
    if (this.length === 0) { throw new Error("EmptySortedList")};
    return this.sum()/this.length
   }
  sum() {
    if (this.length === 0) {return 0};
    return this.items.reduce((a,b) => {
      return a + b
    })
   }
};

module.exports = SortedList;
