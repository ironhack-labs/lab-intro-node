class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length == "") {
      throw new error("EmptySortedList");
    } else {
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length == "") {
      throw new error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (this.items.length == "") {
      return 0;
    } else {
      return this.items.reduce((acc, item) => acc + item);
    }
  }

  avg() {
    if (this.items.length == "") {
      throw new error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
