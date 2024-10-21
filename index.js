class SortedList {
  constructor() {
    this.items = [];
    this.length = "";
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;
    if (this.items.length === 0) {
      return 0;
    } else {
      this.items.forEach((element) => {
        sum += element;
      });
      return sum;
    }
  }

  avg() {
    let sum = 0;
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.forEach((element) => {
        sum += element;
      });
      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
