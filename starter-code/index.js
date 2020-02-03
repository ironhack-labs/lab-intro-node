class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (item !== undefined) {
      this.items.push(item);
      this.length = this.items.length;
      this.items.sort(function(a, b) {
        return a - b;
      });
    }
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let avg = this.sum() / this.length;
      return avg;
    }
  }
}

module.exports = SortedList;
