class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1 || pos < 0) {
      throw new Error("OutOfBounds");
    }
      return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const newArr = this.items.toSorted((a, b) => a - b);
    return newArr[newArr.length - 1]
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    const newArr = this.items.toSorted((a, b) => a - b);
    return newArr[0]
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    const total = this.items.reduce((acc, val) => {
      return acc + val
    }, 0)
    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length
  }
}

module.exports = SortedList;
