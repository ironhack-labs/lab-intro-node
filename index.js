class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;

    const sortedList = this.items.toSorted((a, b) => a - b);

    this.items = sortedList;
  }

  get(pos) {

    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    // assuming the list is sorted in ascending order
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    
    // assuming the list is sorted in ascending order
    return this.items[0];
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, value) => acc + value, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    const sum = this.sum();

    return sum / this.length;
  }
}

module.exports = SortedList;
