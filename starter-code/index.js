class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  sortfunc(x, y) {
    return x-y;
  }

  add(item) {
    // Push item to end of this.items
    this.items.push(item);
    // Sort this.items
    this.items.sort(this.sortfunc);
    // Increment this.length
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length-1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[0];
  }
  
  sum() {
    let sum = 0;
    for (let i=0; i<this.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  average() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.sum()/this.length;
  }
};

module.exports = SortedList;