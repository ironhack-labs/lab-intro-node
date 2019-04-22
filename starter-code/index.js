class SortedList {
  constructor(items) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    return (this.length = this.items.length);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      return this.items.reduce((acc, val) => acc + val);
    }
  }
}

module.exports = SortedList;
