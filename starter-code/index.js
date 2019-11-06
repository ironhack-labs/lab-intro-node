class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.length = this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.min(...this.items);
  }
  sum() {}
  average() {}
}

module.exports = SortedList;
