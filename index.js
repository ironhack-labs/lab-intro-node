class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items = [...this.items, item].sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) throw new Error("OutOfBounds");

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");

    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) throw new Error("Empty SortedList");

    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) return 0;

    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.items.length === 0) throw new Error("EmptySortedList");

    return this.items.reduce((acc, curr) => acc + curr, 0) / this.items.length;
  }
}
// const asd = new SortedList();
// asd.add(1);
// console.log(asd);

module.exports = SortedList;
