class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (this.items[pos] === "undefined") {
      return "OutOfBounds";
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return Math.max(...this.items);
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.sum() / this.items.length;
  }
}

module.exports = SortedList;

const sl = new SortedList();
sl.add(1);
sl.add(2);
console.log(sl);
console.log(sl.get(1));
