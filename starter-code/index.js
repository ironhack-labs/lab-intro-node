class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.length) return this.items[pos-1];
  }
  max() {
    if (this.length === 0) {throw new Error("EmptySortedList")}
    return this.items[this.length-1]
  }
  min() {
    if (this.length === 0) {throw new Error("EmptySortedList")}
    return this.items[0]
  }
  average() {
    if (this.length == 0) {throw new Error("EmptySortedList")};

    var total = this.sum();
    return total / this.length;
  }
  sum() {
    if (this.length == 0) return 0;

   return this.items.reduce((a, b) => a + b);
  }
};

module.exports = SortedList;
