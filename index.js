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
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      let highest = Math.max(...this.items);
      return highest;
    } else {
      throw new Error("EmptySortedListe");
    }
  }

  min() {
    if (this.items.length > 0) {
      let lowest = Math.min(...this.items);
      return lowest;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }

  avg() {
    if (this.items.length !== 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
