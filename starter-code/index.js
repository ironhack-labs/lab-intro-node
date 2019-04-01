class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    const highestNumber = Math.max(...this.items);

    return highestNumber;
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    const lowestNumber = Math.min(...this.items);

    return lowestNumber;
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }

    const sum = this.items.reduce((acc, cv) => acc + cv);
    return sum;
  }
}

module.exports = SortedList;
