class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let bigNum = this.items[0];
    for (let i = 1; i < this.length; i++) {
      if (bigNum < this.items[i]) {
        bigNum = this.items[i];
      }
    }
    return bigNum;
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let smallNum = this.items[0];
    for (let i = 1; i < this.length; i++) {
      if (smallNum > this.items[i]) {
        smallNum = this.items[i];
      }
    }
    return smallNum;
  }

  sum() {
    const result = this.items.reduce((accu, item) => accu + item, 0);
    return result;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    const result = this.sum() / this.length;
    return result;
  }
}

module.exports = SortedList;
