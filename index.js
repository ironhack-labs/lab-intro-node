class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index = 0;
    while (index < this.length && item > this.items[index]) {
      index++;
    }
    this.items.splice(index, 0, item);
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
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
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
