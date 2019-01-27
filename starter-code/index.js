class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }
  add(item) {
    this.length += 1;
    this.items.push(item)
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    let index = pos - 1;
    return this.items[index];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0)
}
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    } 
  }
  
};

module.exports = SortedList;