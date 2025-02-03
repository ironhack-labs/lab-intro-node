class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item)

    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.length < pos) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (!this.items[0]) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (!this.items[0]) {
      throw new Error("Empty SortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    const result = this.items.reduce((acc, curr) => acc + curr, 0)
    return result;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const sum = this.sum();
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
