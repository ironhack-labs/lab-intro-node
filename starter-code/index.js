class SortedList {
  constructor() {
    (this.items = []), (this.length = 0);
  }

  add(item) {
    this.length = this.items.push(item);
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    } else return this.items[pos];
  }

  sort(item) {
    return this.items.splice(_.sortedIndex(this.items, item), 0, item);
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.min(...this.items);
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.items.reduce((a, b) => a + b) / this.items.length;
  }

  sum() {
    if (this.items.length === 0) {
      return "0";
    } else return this.items.reduce((a, b) => a + b);
  }
}

module.exports = SortedList;
