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
    if (pos > this.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }

    return sum;
  }

  avg() {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }

    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
