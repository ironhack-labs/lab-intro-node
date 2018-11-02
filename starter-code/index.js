class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
   get(pos) {
    return this.items[pos - 1];
  }
   max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
   min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
   sum() {
    let count = 0;
    this.items.forEach(e => (count += e));
    return count;
  }
   average() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
