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
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.items.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[0];
  }

  sum() {
    let sum = 0;
    this.items.forEach((element) => {
      sum += element;
    });
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sum = 0;
    this.items.forEach((element) => {
      sum += element;
    });
    return sum / this.length;
  }
}

module.exports = SortedList;
