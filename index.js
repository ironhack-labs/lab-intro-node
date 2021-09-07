class SortedList {
  constructor() {}
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {}
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {}
  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    let val = this.items[pos];
    return val;
  }

  max() {}
  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {}
  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {}
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

  avg() {}
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