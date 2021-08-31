class SortedList {
  constructor(items = [], length = 0) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    for (let i = 1; i < this.length; i++) {
      if (this.items[i] < this.items[i - 1]) {
        return this.items[i - 1];
      } else {
        return this.items[i];
      }
    }
  }

  min() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    for (let i = 1; i < this.length; i++) {
      if (this.items[i] < this.items[i - 1]) {
        return this.items[i];
      } else {
        return this.items[i - 1];
      }
    }
  }

  sum() {
    let total = this.items.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return total;
  }

  avg() {
    if (this.length < 1) {
      throw new Error("EmptySortedList");
    }
    let total = this.sum();
    let average = total / this.length;
    return average;
  }
}

module.exports = SortedList;
