class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length++;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (pos === i) {
          return this.items[i];
        }
      }
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0);
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
}

module.exports = SortedList;
