class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (item !== undefined) {
      this.items.push(item);
      this.length++;
      this.items.sort((a, b) => a - b);
    }
    return this.items;
  }

  get(pos) {
    if (!this.length || pos > this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.length;
  }
}

export default SortedList;