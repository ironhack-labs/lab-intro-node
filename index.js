class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((el1, el2) => {
      return el1 - el2;
    });
    this.length++;
    // console.log(this.items);
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((el, acc) => {
      return el + acc;
    }, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((el, acc) => {
      return el + acc / this.length;
    }, 0);
  }
}

module.exports = SortedList;
