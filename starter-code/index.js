class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => b - a);
      return this.items[0];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => a - b);
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    for (const el of this.items) {
      sum += el;
    }
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = 0;
      for (const el of this.items) {
        sum += el;
      }
      return sum / this.length;
      // return avg;
    }
  }
}

module.exports = SortedList;
