class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length += 1;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let reduced = this.items.reduce((acc, item) => {
        return acc += item;
      }, 0);
      return reduced / this.length;
    }

  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, item) => {
        return acc += item;
      }, 0);
    }
  }
}

module.exports = SortedList;
