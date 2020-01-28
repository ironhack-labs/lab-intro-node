class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items = this.items.sort((a, b) => a - b);
  }

  get(pos) {
    let value = this.items[pos];
    if (pos === this.items[pos]) {
      return value;
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let max = this.items.reduce((a, b) => {
      return Math.max(a, b);
    });
    if (max > 0) {
      return max;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    let min = this.items.reduce((a, b) => {
      return Math.min(a, b);
    });
    if (min > 0) {
      return min;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    const arrSum = this.items.reduce((a, b) => a + b, 0);
    return arrSum;
  }

  avg() {
    let avg = sum() / this.items.length;
    return avg;
  }
}

module.exports = SortedList;
