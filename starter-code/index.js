class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.length++;
    this.items.push(item);
    return this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(pos) {
    // var length = this.length;
    return this.items[pos - 1];
  }
  max() {
    // var length = this.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.max(...this.items);
  }
  min() {
    // var length = this.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.min(...this.items);
  }
  average() {
    // var length = this.length;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.sum() / this.length;
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    let sum = this.items.reduce((sum, x) => sum + x);
    return sum;
  }
}

module.exports = SortedList;
