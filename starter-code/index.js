class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);

    this.length++;
  }
  get(pos) {
    if (pos > this.length) {
      throw new Error(`OutOfBounds`);
    }
    this.length = this.items.length;
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } return Math.max (...this.items)
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } return Math.min(...this.items)
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");}

    return this.sum(this.items) / this.items.length;
  }
  sum() {
    if (this.items.length == 0) {
      return 0;
    }
    return this.items.reduce((ac, cu) => ac + cu);
  }
}

module.exports = SortedList;
new SortedList();
