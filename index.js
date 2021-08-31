class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    let element = this.items[pos];
    return element;
  }

  max() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    let sum = 0;
    for (const element of this.items) {
      sum += element;
    }
    return sum;
  }

  avg() {
    if (!this.items.length) {
      throw new Error("EmptySortedList");
    }

    let sum = 0;
    for (const element of this.items) {
      sum += element;
    }

    let avg = sum / this.items.length;

    return avg;
  }
}

module.exports = SortedList;
