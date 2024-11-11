class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    if (this.items.length > 1) {
      this.items.sort((a, b) => a - b);
    }
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }

    let sumArr = this.items.reduce((acc, curr) => acc + curr, 0);
    return sumArr;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sumArr = this.items.reduce((acc, curr) => acc + curr, 0);
    return sumArr / this.items.length;
  }
}

module.exports = SortedList;
