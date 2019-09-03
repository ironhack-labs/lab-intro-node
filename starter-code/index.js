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
    return this.items[pos];
  }
  max() {
    if (!this.length) throw new Error("EmptySortedList");
    return this.items[this.length - 1];
  }
  min() {
    if (!this.length) throw new Error("EmptySortedList");
    return this.items[0];
  }
  average() {
    if (!this.length) throw new Error("EmptySortedList");
    const sum = this.items.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum / this.items.length;
  }
  sum() {
    const sum = this.items.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  }
}

module.exports = SortedList;
