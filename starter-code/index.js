class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a,b) =>  a - b);
    this.length += 1;
  }
  get(pos) {
    return this.items[pos -1];
  }
  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return Math.min(...this.items)
    }
  }
  sum() {
    return this.items.reduce((acc, total) => acc + total, 0);
  }
  average() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }
  }
};

module.exports = SortedList;
