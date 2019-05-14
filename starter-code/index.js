class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((x, y) => x - y)
    this.length++
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[this.length - 1]
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.sum() / this.length;

  }
  sum() {
    let result = 0;
    for (let i = 0; i < this.length; i++) {
      result += this.items[i]
    }
    return result;
  }
};

module.exports = SortedList;
