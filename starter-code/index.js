class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(items) {
    this.items.push(items);
    this.length = this.items.length;
    this.items = this.items.sort();
  }
  get(pos) {
    // this.length = this.items.length;
    return this.items[pos];
  }
  max() {
    this.items.max();
    if (this.items === 0) {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    this.items.min();
    if (this.items === 0) {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    return this.items.averge();
    if (this.items === 0) {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    return this.items.sum();
  }
}
module.exports = SortedList;
