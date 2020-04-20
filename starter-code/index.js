class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (typeof item === "number") {
      this.items.push(item);
      this.length += 1;
      this.items.sort((a, b) => a - b);
    }
  }
  // if (pos< {
  //   return
  // })
  get(pos) {
    if (this.items[pos] === undefined) {
      throw Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.length) {
      throw Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length) {
      throw Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    if (!this.length) return 0;
    return this.items.reduce((acc, cur));
  }

  avg() {}
}

module.exports = SortedList;
