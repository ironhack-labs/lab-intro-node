class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (!this.items[pos]) {
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
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((el1, el2) => el1 + el2);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort((a, b) => b - a);
      return this.items.reduce((el1, el2) => el1 + el2) / this.length;
    }
  }
}

module.exports = SortedList;
