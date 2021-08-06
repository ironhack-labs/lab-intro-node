class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (!this.items.length) {
      throw Error("EmptySortedList");
    }
    return this.items[this.items.length - 1]
  }

  min() {
    if (!this.items.length) {
      throw Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, current) => {
      return acc + current;
    }, 0)
  }

  avg() {
    if (!this.items.length) {
      throw Error("EmptySortedList");
    }
    return this.items.reduce((acc, current, _, array) => {
      return acc + current / array.length;
    }, 0);
  }
}

module.exports = SortedList;
