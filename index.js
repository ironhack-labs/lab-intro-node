class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
  }

  get(pos) {
    this.items[pos];
    if (pos <= this.items.length) {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items === null) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items === null) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items === null) {
      throw new Error("EmptySortedList");
    }
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.items === null) {
      throw new Error("EmptySortedList");
    }

    const sumOfNumbers = this.items.reduce((previousValue, currentValue) => {
      previousValue + currentValue;
    });
    return sumOfNumbers / this.length;
  }
}

module.exports = SortedList;
