class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    })
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }

  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const highestElem = this.items.length - 1;
      return this.items[highestElem];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      const sum = this.items.reduce((acc, value) => acc + value, 0);
      return sum;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      const sum = this.items.reduce((acc, value) => acc + value, 0);
      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
