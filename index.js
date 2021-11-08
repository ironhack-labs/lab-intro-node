class SortedList {
  constructor() {
    this.items = [];

    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max.apply(Math, this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min.apply(Math, this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce(function (a, b) {
        return a + b;
      });
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let reduce = this.items.reduce(function (a, b) {
        return a + b;
      });
      return reduce/this.items.length;
    }
  }
}

module.exports = SortedList;
