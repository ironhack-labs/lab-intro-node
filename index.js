class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items = [...this.items, item];
    // this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) throw new Error("OutOfBounds");
    else return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    else return this.items[0];
  }

  sum() {
    if (this.length === 0) return 0;
    else {
      const sum = this.items.reduce(function (acc, val) {
        acc += val;
        return acc;
      }, 0);
      return sum;
    }
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
