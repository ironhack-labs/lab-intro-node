class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");

    return this.items[this.length - 1];
  }
  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }
  sum() {
    if (this.items.length === 0) return 0;

    return this.items.reduce((total, currentVal) => total + currentVal);
  }
  average() {
    if (this.items.length === 0) throw new Error("EmptySortedList");

    return (
      this.items.reduce((total, currentVal) => total + currentVal) / this.length
    );
  }
}

module.exports = SortedList;
