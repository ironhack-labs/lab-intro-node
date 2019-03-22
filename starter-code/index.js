class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items = [...this.items].sort((a,b) => a - b);
  }
  get(pos) {
    if(pos > this.length)
      throw new Error("OutOfBounds");
    return this.items[pos - 1];
  }
  max() {
    if(this.items.length > 0)
      // return Math.max(...this.items);
      return this.items[this.length - 1];
    else
    throw new Error("EmptySortedList")
  }
  min() {
    if(this.items.length > 0)
      // return Math.min(...this.items);
      return this.items[0];
    else
    throw new Error("EmptySortedList")
  }
  average() {
    if(this.length > 0)
    return this.sum() / this.length;
    else
    throw new Error("EmptySortedList")


  }

  sum() {
    return this.items.reduce((item, reducer) => {return item+reducer},0)
  }
};

module.exports = SortedList;
