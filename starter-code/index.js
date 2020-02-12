class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items && this.items.length) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items && this.items.length) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }

  }

  sum() {
    if (this.items && this.items.length) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer);
    } else {
      return 0;
    }

  }

  avg() {
    if (this.items && this.items.length) {
      const sum = this.sum();
      return sum / this.length;
    } else {
      throw new Error("EmptySortedList");
    }

  }
}

module.exports = SortedList;
