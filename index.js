class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (typeof item === "number") {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length = this.items.length;
    }
  }

  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((sum, number) => sum + number, 0);
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return +(
      this.items.reduce((sum, number) => sum + number, 0) / this.length
    ).toFixed(1);
  }
}

module.exports = SortedList;
