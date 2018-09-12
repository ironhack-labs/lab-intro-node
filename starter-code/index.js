class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos < 1 || pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max.apply(Math, this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min.apply(Math, this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce(function(sum, elem) {
        return sum + elem;
      });
    }
  }

  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}
module.exports = SortedList;
