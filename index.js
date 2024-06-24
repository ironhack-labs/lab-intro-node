class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length && pos >= 0) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => Math.max(a, b), -Infinity);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => Math.min(a, b), Infinity);
    } else {
      throw new Error("Empty SortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item;
      });
      return sum;
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      let sum = 0;
      this.items.forEach((item) => {
        sum += item;
      });
      let avg = sum / this.length;
      return avg;
    } else {
      throw new Error("Empty SortedList");
    }
  }
}

module.exports = SortedList;
