class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (!this.length) throw new Error("EmptySortedList");
    let max = Math.max(...this.items);
    return max;
  }

  min() {
    if (!this.length) throw new Error("Empty SortedList");
    let min = Math.min(...this.items);
    return min;
  }

  sum() {
    if (!this.length) return 0;
    let sum = this.items.reduce((acc, currentItem) => acc + currentItem);
    return sum;
  }

  avg() {
    if (!this.length) throw new Error("EmptySortedList");
    let avg = this.sum() / this.length;
    return avg;
  }
}

module.exports = SortedList;


