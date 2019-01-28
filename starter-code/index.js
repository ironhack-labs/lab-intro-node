class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(items) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }
  get(items) {
     return this.items[items-1];
  }
  max() {
    if (this.length > 0) {
      return this.items[this.items.length-1]
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.length > 0) {
      return this.items.reduce((a,b) => a+b)/this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.length > 0) {
      return this.items.reduce((a,b) => a+b)
    } else {
      return 0;
    }
  }
};


module.exports = SortedList;

