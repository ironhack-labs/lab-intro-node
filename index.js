class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.get(this.length - 1);
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.get(0);
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.floor(
      this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue / this.length
      )
    );
  }
}

module.exports = SortedList;
