class SortedList {
  constructor() {
    (this.items = []), (this.length = 0);
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    if (this.items.length > 1) {
      this.items.sort((a, b) => {
        return a - b;
      });
    }
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }

    return this.items.reduce((acc, cur) => acc + cur);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items.reduce((acc, cur) => acc + cur) / this.length;
  }
}

module.exports = SortedList;
