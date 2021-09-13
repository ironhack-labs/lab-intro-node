class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    let index = this.items.indexOf(pos);
    if (index !== -1) return index;
    else throw new Error("OutOfBounds");
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    if (!this.items.length) return 0;
    return this.items.reduce((acc, item) => acc + item);
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.items.reduce((acc, item) => acc + item) / this.items.length;
  }
}

module.exports = SortedList;
