class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      return a - b;
    });
    return (this.length = this.items.length);
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort((a, b) => {
      return b - a;
    });
    return this.items[0];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    this.items.sort((a, b) => {
      return a - b;
    });
    return this.items[0];
  }

  sum() {
    const sum = this.items.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
