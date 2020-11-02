class SortedList {
  constructor(items, length) {
    (this.items = []), (this.length = this.items.length);
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos) != -1) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
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
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, currVal) => {
        return acc + currVal;
      });
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.items.reduce((acc, currVal) => {
        return Math.ceil((acc + currVal) / this.items.length);
      });
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
