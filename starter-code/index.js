class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }

  get(pos) {
    this.items.sort(function (a, b) {
      return (a - b);
    });
    return this.items[pos - 1];
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

  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const sum = this.items.reduce(function (acc, current) {
      return acc + current;
    }, 0);
    return sum / this.items.length;
  }

  sum() {
    const sum = this.items.reduce(function (acc, current) {
      return acc + current;
    }, 0);
    return sum;
  }
}

module.exports = SortedList;
