class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    if (pos > this.items.length || this.items.length == 0) {
      throw new RangeError("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }
  max() {
    if (this.items == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items == 0) return 0;
    return this.items.reduce((total, currentValue) => {
      return total + currentValue;
    });
  }
  average() {
    if (this.items == 0) {
      throw new Error("EmptySortedList");
    } else {
      this.length = this.items.length;
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
