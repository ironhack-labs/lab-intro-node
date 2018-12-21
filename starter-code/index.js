class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((x, y) => x - y);
    this.length++;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else return this.items[this.length-1];
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else return this.items[0];
  }
  sum() {
  return (this.length === 0) ? 0 : this.items.reduce((ac, cv) => ac + cv);
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else return (this.sum()/this.length);
  }
};

module.exports = SortedList;
