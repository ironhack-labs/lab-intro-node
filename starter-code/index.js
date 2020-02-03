class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length++
  }

  get(pos) {
    if (pos > this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[this.items.length-1];
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((ac, cu) => ac + cu, 0);
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items.reduce((ac, cu) => ac + cu, 0)/this.length;
  }
}

module.exports = SortedList;
