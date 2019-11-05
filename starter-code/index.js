class SortedList {
  constructor(items = [], length) {
    this.items = items;
    this.length = items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }
  max() {
    if (this.length) {
      return Math.max(...this.items);
    }
    throw new Error("EmptySortedList");
  }
  min() {
    if (this.length) {
      return Math.min(...this.items);
    }
    throw new Error("EmptySortedList");
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((accumulator, value) => accumulator + value);
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return (
      this.items.reduce((accumulator, value) => accumulator + value) /
      this.length
    );
  }
}

module.exports = SortedList;
