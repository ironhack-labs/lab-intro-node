class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("Out of bounds");
    }
  }

  max() {
    if (this.items.length) {
      return Math.max(...this.items);
    } else {
      throw new Error("Empty SortedList");
    }
  }

  min() {
    if (this.items.length) {
      return Math.min(...this.items);
    } else {
      throw new Error("Empty SortedList");
    }
  }

  sum() {
    let totalSum = 0;
    if (this.items.length) {
      return this.items.reduce((a, b) => a + b);

      // for (let i = 0; i < this.items.length; i++) {
      //   totalSum += this.items[i]
      // }

      // return totalSum
      
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("Empty SortedList");
    }
  }
}

module.exports = SortedList;
