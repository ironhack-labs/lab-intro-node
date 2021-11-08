class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    return this.items;
  }

  get(pos) {
    if (pos > this.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    let sum = 0;
    this.items.forEach((element) => {
      sum += element;
    });
    return sum;
  }
  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");
    let avg = this.sum() / this.length;
    return avg;
  }
}

module.exports = SortedList;
