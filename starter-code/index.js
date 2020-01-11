class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((n1, n2) => {
      return n1 - n2;
    });
    this.length++;
  }

  get(pos) {
    if (this.length < pos) throw new Error("OutOfBounds");
    else return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, value) => {
      return value + acc;
    }, 0);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
