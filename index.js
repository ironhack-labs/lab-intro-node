class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    const num = this.items[pos];
    if (num) {
      return this.items[pos];
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    const max = Math.max(...this.items);

    return max;
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    const min = Math.min(...this.items);

    return min;
  }

  sum() {
    return this.items.reduce((acc, value) => acc + value, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    const sum = this.items.reduce((acc, value) => acc + value, 0);
    const result = sum / this.length;

    return result
  }
}

module.exports = SortedList;

