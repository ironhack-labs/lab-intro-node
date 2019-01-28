class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length++;
  }
  get(pos) {
    if (pos > this.length) {
      return new Error("OutOfBounds");
    }
    return this.items[pos - 1];
  }
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
