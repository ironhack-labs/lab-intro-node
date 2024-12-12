class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index = 0;
    while (index < this.length && this.items[index] < item) {
      index++;
    }
    this.items.splice(index, 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos > this.items.length) {
      throw new Error("EmptySortedList");
    }
    return this.items[pos];
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
    sum = this.items.reduce((num, currentValue) => {
      return num + currentValue;
    }, 0);
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
