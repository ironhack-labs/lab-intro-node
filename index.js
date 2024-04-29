class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let total = 0;
    if (this.items.length === null) {
      return 0;
    } else {
      this.items.forEach(function (num) {
        total += num;
      });
    }
    return total;
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    } else {
      let total = this.total();
    }
    return total / this.items.length;
  }
}

module.exports = SortedList;
