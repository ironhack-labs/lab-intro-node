class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length) {
      let total = this.items.reduce((a, c) => {
        return a + c;
      }, 0);
      return total;
    } else {
      return 0;
    }
  }

  avg() {
    let total = this.sum();
    if (this.length) {
      return total / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
