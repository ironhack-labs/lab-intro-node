class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    let maxNumber = this.items;
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...maxNumber);
    }
  }

  min() {
    let minNumber = this.items;
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...minNumber);
    }
  }

  sum() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item;
    });
    return sum;
  }

  avg() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
