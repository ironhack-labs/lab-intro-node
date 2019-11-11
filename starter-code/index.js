class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    if (this.items[pos] == null) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max.apply(0, this.items);
    }
  }

  min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min.apply(0, this.items);
    }
  }
  average() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((ac, cv) => ac + cv, 0) / this.items.length;
    }
  }
  sum() {
    if (this.length <= 0) {
      return 0;
    } else {
      return this.items.reduce((ac, cv) => ac + cv, 0);
    }
  }
}

module.exports = SortedList;
