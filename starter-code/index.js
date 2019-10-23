class SortedList {
  constructor(items, length) {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }
  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b);
  }
  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else throw new Error("OutOfBounds");
  }
  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else throw new Error("EmptySortedList");
  }
  average() {
     if(this.items.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.items.length; 
     } else throw new Error("EmptySortedList");
  } 
  sum() {
     if(this.items.length > 0) {
      return this.items.reduce((a, b) => a + b);
     } else return 0; 
  }
}

module.exports = SortedList;
