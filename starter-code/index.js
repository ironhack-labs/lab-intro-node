class SortedList {
  constructor() {
    // propeties
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (typeof this.items[pos] === "number") {
      return this.items[pos];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  max() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((acc, elem) => acc + elem, 0);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      let sum = this.items.reduce((acc, elem) => acc + elem, 0);
      return sum / this.items.length
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
