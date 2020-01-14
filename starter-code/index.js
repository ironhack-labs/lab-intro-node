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
    let value;
    if ((pos + 1) > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      value = this.items[pos];
    }
    return value;
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
