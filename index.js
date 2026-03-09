class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfbounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error ("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }

    const total = this.items.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    const avg = this.items.reduce((acc, curr, index, arr) => {
      return acc + (curr/arr.length);
    }, 0);

    return avg;
  }
}

module.exports = SortedList;
