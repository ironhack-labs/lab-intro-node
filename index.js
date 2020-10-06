class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });

    this.length++;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    /* First Solution */
    // let total = 0;
    // for (let n of this.items) {
    //   total += n;
    // }
    // return total;

    /* Second Solution */
    if (!this.length) {
      return 0;
    } else {
      return this.items.reduce((acc, curr) => acc + curr);
    }
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
