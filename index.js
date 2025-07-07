class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (item !== null && item !== undefined) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length = this.items.length;
    }
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let result = -Infinity;
    this.items.forEach((e) => {
      if (e > result) {
        result = e;
      }
    });
    return result;
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let result = this.items[0];
    this.items.forEach((e) => {
      if (e < result) {
        result = e;
      }
    });
    return result;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    const result = this.items.reduce((acc, curr) => {
      return acc + curr;
    });

    return result;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    const total = this.items.reduce((acc, curr) => {
      return acc + curr;
    });

    return total / this.length;
  }
}

module.exports = SortedList;
