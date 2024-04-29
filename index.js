class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, currValue) => acc + currValue, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    }

    const sum = this.items.reduce((acc, currValue) => acc + currValue, 0);
    return sum / this.length;
  }
}

module.exports = SortedList;
