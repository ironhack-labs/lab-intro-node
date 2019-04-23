class SortedList {
  constructor(items) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    return (this.length = this.items.length);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    else return this.items.reduce((x, y) => (x > y ? x : y));
  }
  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    else return this.items.reduce((x, y) => (x > y ? y : x));
  }
  average() {
    if (!this.items.length) throw new Error("EmptySortedList");
    else return this.sum() / this.items.length;
  }
  sum() {
    return this.items.reduce((x, y) => x + y, 0);
  }
}

module.exports = SortedList;
