class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    const position = this.items.indexOf(pos);

    if (position === -1) {
      throw new Error("OutOfBounds");
    }

    return position;
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }

    let total = 0;

    for (let i = 0; i < this.length; i++) {
      total += this.items[i];
    }

    return total;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    const total = this.sum();

    return total / this.length;
  }
}

module.exports = SortedList;
