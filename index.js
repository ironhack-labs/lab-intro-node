const { it } = require("mocha");

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length == 0 || item >= this.items.at(-1)) {
      this.items.push(item);
    }
    else {
      for (let i = 0; i < this.items.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          break;
        }
      }
    }
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.at(-1);
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;