class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[0];
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce(
      (accumulatedSum, currentNumber) => accumulatedSum + currentNumber,
      0
    );
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return (
      this.items.reduce(
        (accumulatedSum, currentNumber) => accumulatedSum + currentNumber,
        0
      ) / this.items.length
    );
  }
}

module.exports = SortedList;
