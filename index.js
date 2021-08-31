class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    let val = this.items[pos];
    return val;
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    let sum = 0;
    for (const item of this.items) {
      sum += item;
    }
    return sum;
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    let sum = 0;
    for (const item of this.items) {
      sum += item;

    }
    let avg = sum / this.length;
    return avg;
  }
}

module.exports = SortedList;
