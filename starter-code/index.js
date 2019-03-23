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
      return this.items[pos -1]
  }
  max() {
      if(this.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return Math.max(...this.items);
      }
  }
  min() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items == 0) {
      throw new Error("EmptySortedList")

    } else {
      return this.sum() / this.items.length;  
    }
  }
  sum() {
    return this.length ? this.items.reduce((val, acc) => val + acc) : 0;
  }
};

module.exports = SortedList;
