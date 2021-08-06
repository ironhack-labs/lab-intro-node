class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }

  add(item) {
    this.length++;
    this.items.push(item);
    this.items.sort((a, b) => a - b);
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
    return this.items.reduce((acc, current, index, array) => {
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
