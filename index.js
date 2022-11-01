class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length <= 0) {
      return 0;
    } else {
      let total = 0;
      for (let i in this.items) {
        total += this.items[i];
      }
      return total;
    }
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      let total = 0;
      for (let i in this.items) {
        total += this.items[i];
      }
      let avg = total / this.items.length;
      return avg;
    }
  }
}

module.exports = SortedList;
