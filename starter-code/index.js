class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => {
      return a - b
    });
  }

  get(pos) {
    if (this.items[pos] <= this.length) {
      return this.items[pos]
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if (this.items.length > 0) {
      return this.items[this.length - 1]
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0]
    }
    throw new Error("EmptySortedList");
  }

  sum() {
    if (!this.length) return 0;
    return this.items.reduce(function (a, b) {
      return a + b
    }, 0);
  }

  avg() {
    if (this.items.length > 0) {
      return this.items.reduce(function (a, b) {
        return a + b
      }, 0) / this.length
    }
    throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;