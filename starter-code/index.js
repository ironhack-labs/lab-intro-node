class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length++;
  }
  get(pos) {
    if (this.length - 1 < pos) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }
  max() {
    if (this.length) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.length) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (!this.length) throw new Error("EmptySortedList");
    let s = this.sum();
    return s / this.length;
  }
  sum() {
    if (!this.length) return 0;
    let s = 0;
    // return this.items.reduce((a, b) => {
    //   a + b, 0;
    // });
    this.items.forEach(e => {
      s += e;
    });
    return s;
  }
}

module.exports = SortedList;
