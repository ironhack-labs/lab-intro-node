class SortedList {
  constructor(items = [], length = items.length) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    const value = this.items[pos];
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return value;
  }

  max() {
    this.items.sort((a, b) => a - b);
    const highestValue = this.items.at(-1);
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return highestValue;
  }

  min() {
    this.items.sort((a, b) => b - a);
    const lowestValue = this.items.at(-1);
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return lowestValue;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    const sum = this.items.reduce((num, curr) => {
      return num + curr;
    });
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const sum = this.items.reduce((num, curr) => {
      return num + curr;
    });
    const average = sum / this.items.length
    return average;
  }
}

module.exports = SortedList;
