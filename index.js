class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
  }
    throw new Error("OutOfBounds");
}

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
  }
    return this.items[this.length - 1];
}

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
  }
    return this.items[0];
}

  sum() {
    let sum = 0;
    if (this.length === 0) {
      return 0;
    } else {
      sum = this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    return sum;
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
