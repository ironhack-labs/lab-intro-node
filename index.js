class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index = this.items.findIndex((e) => e >= item);
    this.items.splice(index === -1 ? this.length : index, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) {
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
    return this.items.reduce((acc, ele) => acc + ele, 0);
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((acc, ele) => acc + ele, 0) / this.length;
  }
}

module.exports = SortedList;
