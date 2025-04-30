class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      if (a < b) return -1; // should come before b
      if (a > b) return 1; //should come after b
      return 0; //they are equal leave as is.
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }
  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
