class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.length) {
      return 0;
    }
    let result = 0;
    for (let i = 0; i < this.items.length; i++) {
      result = this.items[i] + this.items[i];
    }

    return result;
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
