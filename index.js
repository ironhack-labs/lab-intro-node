class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.splice(1, 0, item);
    this.items.sort((e1, e2) => {
      return e1 - e2;
    });
    this.length++;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((e1, e2) => e1 + e2, 0);
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((e1, e2) => e1 + e2, 0) / this.length;
    }

  }
}

module.exports = SortedList;
