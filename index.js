class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    }

    let max = this.items.sort((a, b) => {
      return a - b;
    });

    return max[max.length - 1];
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    }

    let max = this.items.sort((a, b) => {
      return a - b;
    });

    return max[0];
  }

  sum() {
    return this.items.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
