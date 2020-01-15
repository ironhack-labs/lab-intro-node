class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    //1.
    return Math.max(...this.items);
    // let maxNumber = Math.max(1,3,4,5,67);

    //2.
    // let maxNumber = 0;
    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i] > maxNumber) {
    //     maxNumber = this.items[i];
    //   }
    // }
    return maxNumber;
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    //1.
    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) return 0;
    return this.items.reduce((acc, val) => acc + val);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;