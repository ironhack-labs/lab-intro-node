class SortedList {
  constructor(items) {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.items.sort();
    this.length = this.items.length;
  }

  get(i) {
    return this.items[i - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  average() {
    if (this.length > 0) {
      var sum = this.items.reduce((a, b) => a + b, 0);
      return sum / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      var sum = this.items.reduce((a, b) => a + b, 0);
      return sum;
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
