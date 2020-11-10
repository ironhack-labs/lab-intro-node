class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    let sortedItems = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    return sortedItems;
  }

  get(pos) {
    if (this.items[pos] !== undefined) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    let sum = this.items.reduce(function (acc, el) {
      return acc + el;
    }, 0);
    return sum;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sum = this.items.reduce(function (acc, el) {
      return acc + el;
    }, 0);
    return sum / this.items.length;
  }
}

module.exports = SortedList;
