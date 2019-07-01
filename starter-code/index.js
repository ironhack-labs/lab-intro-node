class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
  get(pos) {
    this.length = this.items.length;
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length != 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.items.length != 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.items.length != 0) {
      let avg = this.items.reduce((a, b) => {
        return a + b;
      });
      return avg / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.items.length != 0) {
      return this.items.reduce((a, b) => {
        return a + b;
      });
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
